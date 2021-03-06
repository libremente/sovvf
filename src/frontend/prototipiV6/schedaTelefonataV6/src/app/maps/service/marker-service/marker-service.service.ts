import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { MarkedService } from '../marked-service/marked-service.service';
import { Meteo } from '../../../shared/model/meteo.model';
import { MeteoService } from '../../../shared/meteo/meteo-service.service';
import { IconMappe } from './_icone';
import { TipoMappe } from './_typeof';
import { TipoColori } from './_color';
import { AgmService } from '../../agm/agm-service.service';
import { UnitaAttualeService } from '../../../navbar/navbar-service/unita-attuale/unita-attuale.service';
import { ListaRichiesteService } from '../../../richieste/lista-richieste-service/lista-richieste-service.service';
import { RichiesteMarkerManagerService } from '../../../core/manager/maps-manager';
import { Coordinate } from '../../../shared/model/coordinate.model';
import { ChiamataMarker } from '../../maps-model/chiamata-marker.model';
import { CentroMappa } from '../../maps-model/centro-mappa.model';
import { MapsFiltroService } from '../../maps-ui/filtro/maps-filtro.service';

@Injectable({
    providedIn: 'root'
})
export class MarkerService implements OnDestroy {

    private subjectMeteo = new Subject<Meteo>();
    private markedColor = new Subject<string>();
    icone = new IconMappe();
    tipo = new TipoMappe();
    colori = new TipoColori();
    coloreStato: string;

    markerColorato: boolean;
    markerSelezionato: any;
    markerZIndex: any;
    subscription = new Subscription();

    filtro: Array<any>;

    checkMarker: any;


    constructor(private markedService: MarkedService,
                private meteoService: MeteoService,
                private agmService: AgmService,
                private richiesteService: ListaRichiesteService,
                private markerRichiesteManager: RichiesteMarkerManagerService,
                private unitaAttualeS: UnitaAttualeService,
                private mapsFiltroService: MapsFiltroService) {
        this.subscription.add(this.markedService.getMarked().subscribe(marker => {
            this.markerSelezionato = marker;
        }));
        this.filtro = this.mapsFiltroService.filtroAttivo;
        this.subscription.add(this.mapsFiltroService.getMenu().subscribe(menu => {
            this.filtro = [];
            menu.forEach( r => {
                if (r.isActive) {
                    this.filtro.push(r.id);
                }
            });
            this.mapsFiltroService.filtroAttivo = this.filtro;
        }));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    tipoIcona(marker: any, tipoSede: boolean): string {
        /**
         * metodo che mi ritorna il tipo di icona da utilizzare
         */
        if (!tipoSede) {
            return this.icone.tipoIcona(marker, this.modelloMarker(marker), this.iconaSelezionata(marker));
        } else {
            return this.icone.tipoIcona(marker, 'tipo-sede', this.iconaSelezionata(marker));
        }
    }

    modelloMarker(marker): string {
        /**
         * metodo che mi ritorna il modello del marker come stringa
         */
        return this.tipo.markerType(marker);
    }

    trueMarker(marker?: any, cross?: boolean): boolean {
        /**
         * metodo che mi ritorna true, se il marker selezionato è lo stesso che è stato cliccato
         */
        if (cross) {
            return true;
        } else {
            return this.markerSelezionato === marker;
        }
    }

    iconaSelezionata(marker): boolean {
        if (this.markerSelezionato === marker) {
            return true;
        } else if (this.markerColorato === marker) {
            return true;
        }
    }

    zIndex(marker): number {
        if (this.markerZIndex === marker) {
            return 99999;
        }
    }

    coloraMarker(marker) {
        if (!!marker.id_richiesta && marker.mezzo.stato) {
            this.coloreStato = this.colori.markerColor(marker.mezzo.stato);
        } else if (marker.stato) {
            this.coloreStato = this.colori.markerColor(marker.stato);
        } else {
            this.coloreStato = '#343a40';
        }
        this.markedColor.next(this.coloreStato);
    }

    cliccato(marker: any): void {
        /**
         *  imposto nel service marked lo stato del marker a selezionato
         */
        this.selezionato(marker);
        /**
         *  mi arrivano i dati del meteo
         */
        this.getDatiMeteo(marker);
        /**
         * richiamo i metodi per modficare il centro e lo zoom del marker cliccato
         */
        this.agmService.centraMappa(this.getCoordinate(marker));
        this.agmService.cambiaZoom(18);
        this.coloraMarker(marker);
    }

    selezionato(marker: any): void {
        /**
         *  imposto nel service marked lo stato del marker a selezionato
         */
        this.markedService.sendMarked(marker);
    }

    deseleziona(): void {
        /**
         * deseleziono il marker
         */
        this.markedService.clearMarked();
    }

    action(marker, mouse) {
        /**
         * controllo il tipo di marker e il suo mouse event
         */
        const modello = this.modelloMarker(marker);
        switch (modello + '|' + mouse) {
            case 'richiesta|hover-in': {
                this.markerColorato = marker;
                this.markerZIndex = marker;
                this.richiesteService.hoverIn(marker.id);
            }
                break;
            case 'richiesta|hover-out': {
                this.markerColorato = null;
                this.markerZIndex = null;
                this.richiesteService.hoverOut();
            }
                break;
            case 'richiesta|click': {
                if (this.checkMarker !== marker.id) {
                    this.cliccato(marker);
                    this.checkMarker = marker.id;
                    this.richiesteService.fissata(marker.id, true);
                    this.richiesteService.deselezionata();
                }
            }
                break;
            case 'mezzo|hover-in': {
                this.markerZIndex = marker;
                this.markerColorato = marker;
            }
                break;
            case 'mezzo|hover-out': {
                this.markerZIndex = null;
                this.markerColorato = null;
            }
                break;
            case 'mezzo|click': {
                this.cliccato(marker);
                if (!!marker.id_richiesta) {
                    /**
                     * lanciare azione solo quando il mezzo è in soccorso
                     */
                }
            }
                break;
            case 'sede|click': {
                this.cliccato(marker);
            }
                break;
            case 'sede|hover-in': {
                this.markerZIndex = marker;
                this.markerColorato = marker;
            }
                break;
            case 'sede|hover-out': {
                this.markerZIndex = null;
                this.markerColorato = null;
            }
                break;
            default: {
                this.noAction();
                this.richiesteService.defissata();
                this.richiesteService.deselezionata();
                this.checkMarker = null;
                this.markerZIndex = null;
                this.markerColorato = null;
            }
                break;
        }
    }

    getMarkedColor(): Observable<any> {
        return this.markedColor.asObservable();
    }


    visibile(marker: any, selected?: any): boolean {
        /**
         * metodo che nasconde o mostra i marker sulla mappa
         */
        if (selected) {
            return (this.modelloMarker(marker).includes(selected));
        }
        if (this.filtro && this.filtro.length > 0) {
            return this.filtro.includes(this.modelloMarker(marker));
        }
        return true;
    }

    getDatiMeteo(marker: any): void {
        /**
         *  faccio una chiamata all'api del servizio meteo e aspetto i dati del marker selezionato
         */
        this.subjectMeteo.next();
        this.meteoService.getMeteoData(this.getCoordinate(marker))
            .subscribe({
                next: data => this.subjectMeteo.next(data),
                error: data => console.log(`Errore: ${data}`)
            });
    }

    getMeteo(): Observable<Meteo> {
        return this.subjectMeteo.asObservable();
    }

    cambioSede(sede) {
        /**
         * evento che cambia la sede
         */
        this.unitaAttualeS.sendUnitaOperativaAttuale(sede);
    }

    noAction() {
        if (this.markerSelezionato) {
            this.agmService.cambiaZoom(12);
            this.deseleziona();
        }
    }

    actionById(id, mouse) {
        let marker: any;
        marker = this.getMarkerFromId(id);
        switch (mouse) {
            case 'hover-in': {
                this.markerColorato = marker;
                this.markerZIndex = marker;
            }
                break;
            case 'hover-out': {
                this.markerColorato = null;
                this.markerZIndex = null;
            }
                break;
            case 'click': {
                if (this.checkMarker !== marker) {
                    this.cliccato(marker);
                    this.checkMarker = marker.id;
                }
            }
                break;
        }
    }

    getCoordinate(marker): Coordinate {
        /**
         * fa il mapping dell'oggetto coordinate a seconda del modello di marker
         */
        const modello = this.modelloMarker(marker);
        let coordinate: Coordinate = null;
        switch (modello) {
            case 'richiesta': {
                coordinate = marker.localita.coordinate;
            }
                break;
            default: {
                coordinate = marker.coordinate;
            }
                break;
        }
        return coordinate;
    }

    getMarkerFromId(id: string) {
        return this.markerRichiesteManager.getMarkerFromId(id);
    }

    /**
     * metodo che chiama il manager e cambia la proprietà opacità al marker
     * @param action
     * @param stringSearch
     */
    opacizzaMarkers(action: boolean, stringSearch?: string[]): void {
        if (action) {
            this.markerRichiesteManager.cambiaOpacitaMarker(true, stringSearch);
        } else {
            this.markerRichiesteManager.cambiaOpacitaMarker(false);
        }
    }

    chiamata(marker: ChiamataMarker, action: string, centroMappa?: CentroMappa) {
        switch (action) {
            case 'centra': {
                // this.agmService.centraMappa(this.getCoordinate(marker));
                // this.agmService.cambiaZoom(18);
                // this.markerZIndex = marker;
            }
                break;
            default: {
                // this.agmService.centraMappa(centroMappa.coordinate);
                // this.agmService.cambiaZoom(12);
                // this.markerZIndex = null;
            }
                break;
        }
    }

}

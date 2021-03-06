import { Component, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UnitaOperativaTreeviewService } from '../navbar-service/unita-operativa-treeview-service/unita-operativa-treeview.service';
import { TreeviewConfig, TreeviewItem } from 'ngx-treeview';
import { UnitaAttualeService } from '../navbar-service/unita-attuale/unita-attuale.service';
import { NgbDropdown, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Sede } from '../../../shared/model/sede.model';
import { Store } from '@ngxs/store';
import { ShowToastr } from '../../../shared/store/actions/toastr/toastr.actions';


@Component({
    selector: 'app-unita-operativa-treeview',
    templateUrl: './unita-operativa-treeview.component.html',
    styleUrls: ['./unita-operativa-treeview.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class UnitaOperativaTreeviewComponent implements OnInit, OnDestroy {

    subscription = new Subscription();
    unitaAttuale: Sede[];
    treeViewOpened: boolean;

    items: TreeviewItem[];
    initItem: any[];
    selectedItem: any[];
    checkedCount = 0;
    sedeCorrenteString: string;

    config = TreeviewConfig.create({
        hasAllCheckBox: false,
        hasFilter: true,
        hasCollapseExpand: false,
        decoupleChildFromParent: false,
        maxHeight: 400
    });

    constructor(private treeviewService: UnitaOperativaTreeviewService,
                private unitaAttualeS: UnitaAttualeService,
                private store: Store,
                config: NgbDropdownConfig) {
        config.autoClose = false;
        this.unitaAttuale = this.unitaAttualeS.unitaSelezionata;
        this.subscription.add(
            this.unitaAttualeS.getUnitaOperativaAttuale().subscribe(unitaAttuale => {
                this.unitaAttuale = unitaAttuale;
                if (this.unitaAttuale.length > 0) {
                    this.sedeCorrenteString = this.treeviewService.getSediAttualiString();
                    this.clearInitItem();
                }
            })
        );

        const sedeAttuale = [
            // new Sede('1', 'Comando di Roma', new Coordinate(41.899940, 12.491270), 'Via Genova, 1, 00184 Roma RM', 'Comando', 'Lazio', 'Roma'),
            new Sede('6', 'Distaccamento Cittadino Eur', null, 'Piazza F. Vivona, 4 00144 Roma', 'Distaccamento', 'Lazio', 'Roma'),
            new Sede('7', 'Distaccamento Cittadino Fluviale', null, 'Lungotevere Arnaldo da Brescia 00100 Roma', 'Distaccamento', 'Lazio', 'Roma'),
            new Sede('8', 'Distaccamento Cittadino La Rustica', null, 'Via Achille Vertunni, 98 00155 Roma', 'Distaccamento', 'Lazio', 'Roma'),
            // new Sede('9', 'Distaccamento Fondi', null, 'xxx indirizzo Fondi', 'Distaccamento', 'Lazio', 'Latina'),

        ];
        this.unitaAttualeS.unitaSelezionata = sedeAttuale;
        this.unitaAttualeS.sendUnitaOperativaAttuale(sedeAttuale);
        this.unitaAttualeS.startCount++;
    }

    @ViewChild('treeviewSedi') treeviewSedi: NgbDropdown;

    @HostListener('document:keydown.escape') onKeydownHandler() {
        if (this.treeViewOpened) {
            this.annullaCambioSede('esc');
            // console.log('premuto tasto esc');
            this.treeviewSedi.close();
        }
    }

    ngOnInit() {
        this.getTreeViewItems();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    openDropDown(value: any) {
        this.treeViewOpened = !!value;
        if (value) {
            this.clearInitItem();
        }
    }

    getValue(value: any) {
        if (!this.initItem || this.checkedCount === 0) {
            // console.log(`selezione iniziale: ${value}`);
            this.initItem = value;
        } else {
            // console.log(`selezione corrente: ${value}`);
            this.selectedItem = value;
        }
        this.checkedCount++;
    }

    checkCambioSede() {
        if (this.initItem.toString() !== this.selectedItem.toString()) {
            if (!this.treeviewService._get.sediSelezionate(this.selectedItem).error) {
                // console.log('La sede selezionata è cambiata!');
                this.changeUnitaAttuale(this.selectedItem);
            } else {
                this.annullaCambioSede('nessuna');
            }
        } else {
            // console.log('la sede selezionata non è cambiata');
        }
    }

    clearInitItem() {
        this.getTreeViewItems();
    }

    annullaCambioSede(tipo: string) {
        // console.log('cambio sede è annullato');
        this.getTreeViewItems();
        this.selectedItem = this.initItem;
        const mAlertObj = mAlert(tipo);

        this.showAlert(mAlertObj.title, mAlertObj.message, mAlertObj.type);

        function mAlert(value: any) {
            const title = 'Attenzione';
            const type = 'warning';
            let message = '';
            switch (value) {
                case 'esc':
                    message = 'Azione annullata';
                    break;
                case 'annulla':
                    message = 'Cambio sede annullato';
                    break;
                case 'nessuna':
                    message = 'Nessuna sede selezionata';
                    break;
            }
            return {
                title: title,
                message: message,
                type: type
            };
        }
    }

    changeUnitaAttuale(newUnita: any) {
        // console.log('change unita');
        this.unitaAttualeS.unitaSelezionataString = this.treeviewService._get.sediSelezionate(newUnita).testo;
        this.unitaAttualeS.unitaSelezionata = this.treeviewService._get.sediSelezionate(newUnita).sedi;
        this.unitaAttualeS.sendUnitaOperativaAttuale(this.unitaAttualeS.unitaSelezionata);
    }


    getTreeViewItems() {
        this.checkedCount = 0;
        this.treeviewService.getSedi().subscribe(r => {
            this.items = r;
        });
    }

    showAlert(title: string, message: string, type: any) {
        this.store.dispatch(new ShowToastr(type, title, message, 3));
    }

    annulla() {
        this.annullaCambioSede('annulla');
    }

    conferma() {
        if (this.selectedItem) {
            this.checkCambioSede();
        }
    }

}

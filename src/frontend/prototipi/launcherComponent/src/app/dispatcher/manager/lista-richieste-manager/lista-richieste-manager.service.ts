import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DispatcherListaRichiesteService } from '../../dispatcher-lista-richieste.service';
import { SintesiRichiesta } from '../../../shared/model/sintesi-richiesta.model';


@Injectable({
    providedIn: 'root'
})
export class ListaRichiesteManagerService {

    richieste: SintesiRichiesta[] = [];

    prossimaRichiesta = 0;
    ultima = 0;
    constructor(private dispatcher: DispatcherListaRichiesteService) {
        this.onNewRichiesteList();
        this.onNewRichiesta();
        this.onUpdateRichiesta();
        this.onDeleteRichiesta();
    }

    onNewRichiesteList() {
        this.dispatcher.onNewRichiesteList().subscribe((richieste: SintesiRichiesta[]) => {
            const nPerPagina = 15;
            if (richieste[this.prossimaRichiesta]) {
                for (let i = this.prossimaRichiesta; i < (this.prossimaRichiesta + nPerPagina); i++) {
                    if (richieste[i]) {
                        this.richieste.push(richieste[i]);
                        this.ultima = i;
                        console.log('a');
                    } else {
                        this.prossimaRichiesta = this.ultima + 1;
                        console.log('b');
                        return;
                    }
                }
                this.prossimaRichiesta = this.ultima + 1;
            } else {
                console.log('bb');
            }
        });
    }

    onNewRichiesta() {
        this.dispatcher.onNewRichiesta().subscribe((richiesta: SintesiRichiesta) => {
            this.richieste.unshift(richiesta);
        });
    }

    onUpdateRichiesta() {
        this.dispatcher.onUpdateRichiesta().subscribe((richiesta: SintesiRichiesta) => {
            this.richieste = this.richieste.map(r => r.id === richiesta.id ? richiesta : r);
            console.log(this.richieste);
        });
    }
    onDeleteRichiesta() {
        this.dispatcher.onDeleteRichiesta().subscribe((richiesta: SintesiRichiesta) => {
            this.richieste = this.richieste.filter(x => x.id === richiesta.id);
        });
    }

    getData(): Observable<SintesiRichiesta[]> {
        return of(this.richieste);
    }

    getRichiestaFromId(id) {
        return this.richieste.find(x => x.id === id);
    }
}

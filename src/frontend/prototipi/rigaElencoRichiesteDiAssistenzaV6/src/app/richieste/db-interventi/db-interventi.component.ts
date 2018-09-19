import { Component, OnInit, Input } from '@angular/core';
import { SintesiRichiesta } from '../../shared/model/sintesi-richiesta.model';
import { EventiService } from '../lista-richieste-service/eventi-service/eventi-service.service';

@Component({
    selector: 'app-db-interventi',
    templateUrl: './db-interventi.component.html',
    styleUrls: ['./db-interventi.component.css']
})
export class DbInterventiComponent implements OnInit {
    @Input() richieste: SintesiRichiesta[];

    constructor() {
    }

    ngOnInit() {
    }
}
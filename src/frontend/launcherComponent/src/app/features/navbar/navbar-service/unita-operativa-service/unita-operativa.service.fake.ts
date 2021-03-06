import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Sede } from '../../../../shared/model/sede.model';
import { Coordinate } from '../../../../shared/model/coordinate.model';

@Injectable({
    providedIn: 'root'
})
export class UnitaOperativaServiceFake {

    unitaOperative: Sede[];

    constructor() {
    }

    getUnitaOperative() {
        this.unitaOperative = [
            new Sede('1', 'Comando VV.F. di Roma', new Coordinate(41.899940, 12.491270), 'Via Genova, 1, 00184 Roma RM', 'Comando', 'Lazio', 'Roma'),
            new Sede('2', 'Comando VV.F. di Latina', new Coordinate(41.474258, 12.903250), 'Piazzale G. Carturan, 1, 04100 Latina LT', 'Comando', 'Lazio', 'Latina'),
            new Sede('3', 'Comando VV.F. di Frosinone', new Coordinate(41.616320, 13.310050), 'Viale Volsci 104 (ex- Via Monti Lepini snc) 03100 Frosinone', 'Comando', 'Lazio', 'Frosinone'),
            // new Sede('4', 'Comando VV.F. di Rieti', new Coordinate(42.397678, 12.858020), 'Via Sacchetti Sassetti, 1, 02100 Rieti RI', 'Comando', 'Lazio', 'Rieti'),
            // new Sede('5', 'Comando VV.F. di Viterbo', new Coordinate(42.482290, 12.069130), 'Str. Cassia Nord, km 84, 01100 Viterbo VT', 'Comando', 'Lazio', 'Viterbo'),
            new Sede('6', 'Distaccamento Cittadino Eur', null, 'Piazza F. Vivona, 4 00144 Roma', 'Distaccamento', 'Lazio', 'Roma'),
            new Sede('7', 'Distaccamento Cittadino Fluviale', null, 'Lungotevere Arnaldo da Brescia 00100 Roma', 'Distaccamento', 'Lazio', 'Roma'),
            new Sede('8', 'Distaccamento Cittadino La Rustica', null, 'Via Achille Vertunni, 98 00155 Roma', 'Distaccamento', 'Lazio', 'Roma'),
            new Sede('24', 'Distaccamento Provinciale di Cassino', null, 'Via S.Scolastica 03043 Cassino', 'Distaccamento', 'Lazio', 'Frosinone'),
            new Sede('25', 'Distaccamento Provinciale di Fiuggi', null, 'Via del Lago di Canterno 03014 Fiuggi', 'Distaccamento', 'Lazio', 'Frosinone'),
            new Sede('26', 'Distaccamento Provinciale di Sora', null, 'Via dell\'Industria snc 03039 Sora', 'Distaccamento', 'Lazio', 'Frosinone'),
            new Sede('9', 'Distaccamento Fondi', null, 'xxx indirizzo Fondi', 'Distaccamento', 'Lazio', 'Latina'),
            new Sede('10', 'Direzione Regionale VV.F. Lazio', null, 'Via San Giovanni Eudes 00163 Roma', 'Direzione', 'Lazio', null),
            new Sede('11', 'Direzione Regionale VV.F. Toscana', null, 'xxxxx', 'Direzione', 'Toscana', null),
            new Sede('12', 'Comando di Arezzo', new Coordinate(41.899940, 12.491270), 'xxxx', 'Comando', 'Toscana', 'Arezzo'),
            new Sede('13', 'Comando di Firenze', new Coordinate(41.474258, 12.903250), 'xxxx', 'Comando', 'Toscana', 'Firenze'),
            new Sede('14', 'Comando di Grosseto', new Coordinate(41.616320, 13.310050), 'xxxx', 'Comando', 'Toscana', 'Grosseto'),
            new Sede('15', 'Comando di Livorno', new Coordinate(42.397678, 12.858020), 'xxxx', 'Comando', 'Toscana', 'Livorno'),
            new Sede('16', 'Distaccamento Arezzo1', null, 'xxxx', 'Distaccamento', 'Toscana', 'Arezzo'),
            new Sede('17', 'Distaccamento Arezzo2', null, 'xxxx', 'Distaccamento', 'Toscana', 'Arezzo'),
            new Sede('18', 'Distaccamento Firenze1', null, 'xxxx', 'Distaccamento', 'Toscana', 'Firenze'),
            new Sede('19', 'Distaccamento Firenze2', null, 'xxxx', 'Distaccamento', 'Toscana', 'Firenze'),
            new Sede('20', 'Distaccamento Grosseto1', null, 'xxxx', 'Distaccamento', 'Toscana', 'Grosseto'),
            new Sede('21', 'Distaccamento Grosseto2', null, 'xxxx', 'Distaccamento', 'Toscana', 'Grosseto'),
            new Sede('22', 'Distaccamento Livorno1', null, 'xxxx', 'Distaccamento', 'Toscana', 'Livorno'),
            new Sede('23', 'Distaccamento Livorno2', null, 'xxxx', 'Distaccamento', 'Toscana', 'Livorno'),
        ];
        return of(this.unitaOperative);
    }

}

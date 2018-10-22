import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

// Models
import {Tipologia} from '../../../../../shared/model/tipologia.model';
import {Localita} from '../../../../../shared/model/localita.model';
import {Coordinate} from '../../../../../shared/model/coordinate.model';
import {RichiestaMarker} from '../../../../../maps/maps-model/richiesta-marker.model';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class RichiesteMarkerServiceFake {

    private richieste: RichiestaMarker[] = [];

    constructor() {
    }

    public getRichieste(): Observable<RichiestaMarker[]> {
        this.richieste = [
            new RichiestaMarker(
                'R1',
                new Localita(
                    new Coordinate(41.8624992, 12.5532867),
                    'Via Scribonio Curione, 22', 'nei pressi dell\'uscita della metro'
                ),
                [
                    new Tipologia('2', 'Incendio ed esplosione', 'fa fa-fire')
                ],
                'Esplosione nei pressi di un centro abitato',
                5,
                'chiamata',
                moment().subtract(0, 'minutes').toDate()

            ),
            new RichiestaMarker(
                'R2',
                new Localita(
                    new Coordinate(41.8549993, 12.5688578), 'Via Tuscolana, 1500', 'automobile ribaltata, persona anziana'),
                [
                    new Tipologia('2', 'Incidente stradale generico', 'fa fa-car')
                ],
                'Incidente d\'auto persona anziana',
                3,
                'assegnato'
            ),
            new RichiestaMarker(
                'R3',
                new Localita(
                    new Coordinate(41.9161894, 12.4554147), 'Viale Giuseppe Mazzini, 159', 'nelle vicinanze di un ristorante'),
                [
                    new Tipologia('360', 'Messa in sicurezza impianti tecnologici di servizio (acqua, energia elettrica, gas)', '')
                ],
                'Scintille da palo elettrico',
                1,
                'chiamata'
            ),
            new RichiestaMarker(
                'R4',
                new Localita(
                    new Coordinate(41.8932662, 12.5417044), 'Via di Portonaccio', 'incrocio con Via Prenestina'),
                [
                    new Tipologia('360', 'Cedimento sede stradale', '')
                ],
                'Cedimento sede stradale con rimozione veicolo',
                2,
                'presidiato'
            ),
            new RichiestaMarker(
                'R5',
                new Localita(
                    new Coordinate(41.8311007, 12.4683518), 'Viale Europa, 184', 'dal palazzo delle Poste Italiane'),
                [
                    new Tipologia('360', 'Salvataggio persone', '')
                ],
                'Persona che minaccia di buttarsi da un tetto',
                4,
                'sospeso',
                moment().subtract(35, 'minutes').toDate()
            ),
            new RichiestaMarker(
                'R6',
                new Localita(new Coordinate(41.8654843, 12.5805044), 'Viale dei Romanisti, 40', 'vicino ai secchi dell\'immondizia'),
                [
                    new Tipologia('2', 'Incendio ed esplosione', 'fa fa-fire')
                ],
                'Incendio a bordo strada',
                1,
                'chiamata'
            ),
            new RichiestaMarker(
                'R7',
                new Localita(
                    new Coordinate(41.82699, 12.4874854), 'Via Simone Martini, 125', 'persone all\'interno del garage'),
                [
                    new Tipologia('2', 'Incidente stradale generico', 'fa fa-car')
                ],
                'Incidente d\'auto persona anziana',
                3,
                'assegnato'
            ),
            /* Inizio copia dei precedenti marker */
            new RichiestaMarker(
                'R8',
                new Localita(
                    new Coordinate(41.9161894, 12.4654147), 'Viale Giuseppe Mazzini, 159', 'nelle vicinanze di un ristorante'),
                [
                    new Tipologia('360', 'Messa in sicurezza impianti tecnologici di servizio (acqua, energia elettrica, gas)', '')
                ],
                'Scintille da palo elettrico',
                1,
                'chiamata'
            ),
            new RichiestaMarker(
                'R9',
                new Localita(
                    new Coordinate(41.8932662, 12.5517044), 'Via di Portonaccio', 'incrocio con Via Prenestina'),
                [
                    new Tipologia('360', 'Cedimento sede stradale', '')
                ],
                'Cedimento sede stradale con rimozione veicolo',
                2,
                'presidiato'
            ),
            new RichiestaMarker(
                'R10',
                new Localita(
                    new Coordinate(41.8311007, 12.4783518), 'Viale Europa, 184', 'dal palazzo delle Poste Italiane'),
                [
                    new Tipologia('360', 'Salvataggio persone', '')
                ],
                'Persona che minaccia di buttarsi da un tetto',
                4,
                'sospeso',
                moment().subtract(35, 'minutes').toDate()
            ),
            new RichiestaMarker(
                'R11',
                new Localita(
                    new Coordinate(41.8624992, 12.5732867),
                    'Via Scribonio Curione, 22', 'nei pressi dell\'uscita della metro'
                ),
                [
                    new Tipologia('2', 'Incendio ed esplosione', 'fa fa-fire')
                ],
                'Esplosione nei pressi di un centro abitato',
                5,
                'chiamata',
                moment().subtract(0, 'minutes').toDate()
            ),
            new RichiestaMarker(
                'R12',
                new Localita(
                    new Coordinate(41.8549993, 12.5888578), 'Via Tuscolana, 1500', 'automobile ribaltata, persona anziana'),
                [
                    new Tipologia('2', 'Incidente stradale generico', 'fa fa-car')
                ],
                'Incidente d\'auto persona anziana',
                3,
                'assegnato'
            ),
            new RichiestaMarker(
                'R13',
                new Localita(
                    new Coordinate(41.9161894, 12.4754147), 'Viale Giuseppe Mazzini, 159', 'nelle vicinanze di un ristorante'),
                [
                    new Tipologia('360', 'Messa in sicurezza impianti tecnologici di servizio (acqua, energia elettrica, gas)', '')
                ],
                'Scintille da palo elettrico',
                1,
                'chiamata'
            ),
            new RichiestaMarker(
                'R14',
                new Localita(
                    new Coordinate(41.8932662, 12.5617044), 'Via di Portonaccio', 'incrocio con Via Prenestina'),
                [
                    new Tipologia('360', 'Cedimento sede stradale', '')
                ],
                'Cedimento sede stradale con rimozione veicolo',
                2,
                'presidiato'
            ),
            new RichiestaMarker(
                'R15',
                new Localita(
                    new Coordinate(41.8311007, 12.4883518), 'Viale Europa, 184', 'dal palazzo delle Poste Italiane'),
                [
                    new Tipologia('360', 'Salvataggio persone', '')
                ],
                'Persona che minaccia di buttarsi da un tetto',
                4,
                'sospeso',
                moment().subtract(35, 'minutes').toDate()
            ),
            new RichiestaMarker(
                'R16',
                new Localita(
                    new Coordinate(41.8624992, 12.5632867),
                    'Via Scribonio Curione, 22', 'nei pressi dell\'uscita della metro'
                ),
                [
                    new Tipologia('2', 'Incendio ed esplosione', 'fa fa-fire')
                ],
                'Esplosione nei pressi di un centro abitato',
                5,
                'chiamata',
                moment().subtract(0, 'minutes').toDate()
            ),
            new RichiestaMarker(
                'R17',
                new Localita(
                    new Coordinate(41.8549993, 12.5788578), 'Via Tuscolana, 1500', 'automobile ribaltata, persona anziana'),
                [
                    new Tipologia('2', 'Incidente stradale generico', 'fa fa-car')
                ],
                'Incidente d\'auto persona anziana',
                3,
                'assegnato'
            ),
            new RichiestaMarker(
                'R18',
                new Localita(
                    new Coordinate(41.9161894, 12.4654147), 'Viale Giuseppe Mazzini, 159', 'nelle vicinanze di un ristorante'),
                [
                    new Tipologia('360', 'Messa in sicurezza impianti tecnologici di servizio (acqua, energia elettrica, gas)', '')
                ],
                'Scintille da palo elettrico',
                1,
                'chiamata'
            ),
            new RichiestaMarker(
                'R19',
                new Localita(
                    new Coordinate(41.8932662, 12.5517044), 'Via di Portonaccio', 'incrocio con Via Prenestina'),
                [
                    new Tipologia('360', 'Cedimento sede stradale', '')
                ],
                'Cedimento sede stradale con rimozione veicolo',
                2,
                'presidiato'
            ),
            new RichiestaMarker(
                'R20',
                new Localita(
                    new Coordinate(41.8311007, 12.4783518), 'Viale Europa, 184', 'dal palazzo delle Poste Italiane'),
                [
                    new Tipologia('360', 'Salvataggio persone', '')
                ],
                'Persona che minaccia di buttarsi da un tetto',
                4,
                'sospeso',
                moment().subtract(35, 'minutes').toDate()
            ),
            new RichiestaMarker(
                'R21',
                new Localita(
                    new Coordinate(41.8624992, 12.5732867),
                    'Via Scribonio Curione, 22', 'nei pressi dell\'uscita della metro'
                ),
                [
                    new Tipologia('2', 'Incendio ed esplosione', 'fa fa-fire')
                ],
                'Esplosione nei pressi di un centro abitato',
                5,
                'chiamata',
                moment().subtract(0, 'minutes').toDate()
            ),
            new RichiestaMarker(
                'R22',
                new Localita(
                    new Coordinate(41.8549993, 12.5888578), 'Via Tuscolana, 1500', 'automobile ribaltata, persona anziana'),
                [
                    new Tipologia('2', 'Incidente stradale generico', 'fa fa-car')
                ],
                'Incidente d\'auto persona anziana',
                3,
                'assegnato'
            ),
            new RichiestaMarker(
                'R23',
                new Localita(
                    new Coordinate(41.9161894, 12.4754147), 'Viale Giuseppe Mazzini, 159', 'nelle vicinanze di un ristorante'),
                [
                    new Tipologia('360', 'Messa in sicurezza impianti tecnologici di servizio (acqua, energia elettrica, gas)', '')
                ],
                'Scintille da palo elettrico',
                1,
                'chiamata'
            ),
            new RichiestaMarker(
                'R24',
                new Localita(
                    new Coordinate(41.8932662, 12.5617044), 'Via di Portonaccio', 'incrocio con Via Prenestina'),
                [
                    new Tipologia('360', 'Cedimento sede stradale', '')
                ],
                'Cedimento sede stradale con rimozione veicolo',
                2,
                'presidiato'
            ),
            new RichiestaMarker(
                'R25',
                new Localita(
                    new Coordinate(41.8311007, 12.4883518), 'Viale Europa, 184', 'dal palazzo delle Poste Italiane'),
                [
                    new Tipologia('360', 'Salvataggio persone', '')
                ],
                'Persona che minaccia di buttarsi da un tetto',
                4,
                'sospeso',
                moment().subtract(35, 'minutes').toDate()
            )
        ];

        return of(this.richieste);
    }
}
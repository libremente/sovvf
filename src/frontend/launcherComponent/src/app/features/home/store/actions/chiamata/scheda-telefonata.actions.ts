import { SchedaTelefonataInterface } from '../../../chiamata/model/scheda-telefonata.interface';
import { FormChiamataModel } from '../../../chiamata/model/form-scheda-telefonata.model';
import { ChiamataMarker } from '../../../maps/maps-model/chiamata-marker.model';

export class ReducerSchedaTelefonata {
    static readonly type = '[Scheda Telefonata] Reduce completato';

    constructor(public schedaTelefonata: SchedaTelefonataInterface) {
    }
}

export class SetChiamata {
    static readonly type = '[Scheda Telefonata] Set chiamata';

    constructor(public chiamata: FormChiamataModel) {
    }

}

export class SetMarkerChiamata {
    static readonly type = '[Scheda Telefonata] Set chiamata Marker';

    constructor(public marker: ChiamataMarker) {
    }
}

export class ClearMarkerChiamata {
    static readonly type = '[Scheda Telefonata] Clear chiamata Marker';
}

export class ClearChiamata {
    static readonly type = '[Scheda Telefonata] Clear chiamata Marker';
}

export class InsertChiamata {
    static readonly type = '[Scheda Telefonata] Insert chiamata';

}


export class CestinaChiamata {
    static readonly type = '[Scheda Telefonata] Cestina chiamata';

}

export class ResetChiamata {
    static readonly type = '[Scheda Telefonata] Reset chiamata';

}

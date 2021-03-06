/**
 * inizio action richieste
 */
export class SetMarkerRichiestaSelezionato {
    static readonly type = '[Marker] Set Marker Richiesta Selezionato';

    constructor(public markerRichiestaSelezionato: string) {
    }
}

export class ClearMarkerRichiestaSelezionato {
    static readonly type = '[Marker] Clear Marker Richiesta Selezionato';
}

export class SetMarkerRichiestaHover {
    static readonly type = '[Marker] Set Marker Richiesta Hover';

    constructor(public markerRichiestaHover: string) {
    }
}

export class ClearMarkerRichiestaHover {
    static readonly type = '[Marker] Clear Marker Richiesta Hover';
}


/**
 * inizio action mezzi
 */
export class SetMarkerMezzoSelezionato {
    static readonly type = '[Marker] Set Marker Mezzo Selezionato';

    constructor(public markerMezzoSelezionato: string) {
    }
}

export class ClearMarkerMezzoSelezionato {
    static readonly type = '[Marker] Clear Marker Mezzo Selezionato';
}

export class SetMarkerMezzoHover {
    static readonly type = '[Marker] Set Marker Mezzo Hover';

    constructor(public markerMezzoHover: string) {
    }
}

export class ClearMarkerMezzoHover {
    static readonly type = '[Marker] Clear Marker Mezzo Hover';
}


/**
 * inizio action sedi
 */
export class SetMarkerSedeSelezionato {
    static readonly type = '[Marker] Set Marker Sede Selezionato';

    constructor(public markerSedeSelezionato: string) {
    }
}

export class ClearMarkerSedeSelezionato {
    static readonly type = '[Marker] Clear Marker Sede Selezionato';
}

export class SetMarkerSedeHover {
    static readonly type = '[Marker] Set Marker Sede Hover';

    constructor(public markerSedeHover: string) {
    }
}

export class ClearMarkerSedeHover {
    static readonly type = '[Marker] Clear Marker Sede Hover';
}

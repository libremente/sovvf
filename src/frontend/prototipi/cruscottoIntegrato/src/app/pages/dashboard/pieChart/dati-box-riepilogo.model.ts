export enum StatoMeteo { Sole, SoleNuvola, Nuvoloso, Pioggerella, Pioggia, Temporale };

export class DatiBoxRiepilogo {
    constructor(
        public richiesteInCoda: number,
        public richiesteInViaggio: number,
        public richiesteSulPosto: number,
        public richiesteInRientro: number,
        public erroreBoxRichieste: string,

        public mezziImpegnati: number,
        public mezziInServizio: number,
        public erroreBoxMezzi: string,

        public squadreImpegnate: number,
        public squadreInServizio: number,
        public erroreBoxSquadre: string,

        public descrizioneMeteo: string,
        public statoMeteo: StatoMeteo,
        public erroreBoxMeteo: string
    ) { }

    public get richiesteInCorso(): number {
        return this.richiesteInViaggio + this.richiesteSulPosto + this.richiesteInRientro;
    }

    public get percentualeRichieste(): number {
        const mediaRichieste = 26;
        return (this.richiesteInCoda + this.richiesteInCorso) / mediaRichieste * 100;
    }

    public get percentualeMezzi(): number {
        const mezziTotali = 34;
        return this.mezziInServizio / mezziTotali * 100;
    }

    public get percentualeSquadre(): number {
        const squadreTotali = 26;
        return this.squadreInServizio / squadreTotali * 100;
    }

    public static getFake(): DatiBoxRiepilogo {
        return new DatiBoxRiepilogo(
            2,
            3,
            7,
            2,
            null,
            14,
            26,
            null,
            14,
            20,
            null,
            "Soleggiato",
            StatoMeteo.Sole,
            null
        );
    }

    public modificaRandom(): void {
        let rnd = Math.random();

        if (rnd > .95) {
            this.erroreBoxMeteo = "Simulazione perdita di connessione";
        } else {
            this.erroreBoxMeteo = null;
        }

        if (rnd > .5) {
            Math.random() > .5 ? this.mezziImpegnati++ : this.mezziImpegnati--;
            if (this.mezziImpegnati < 0) //mai negativo
                this.mezziImpegnati = 2;
            this.squadreImpegnate = this.mezziImpegnati;
        }

        if (rnd > .5) {
            Math.random() > .5 ? this.richiesteInCoda++ : this.richiesteInCoda--;
            if (this.richiesteInCoda < 0) //mai negativo
                this.richiesteInCoda = 2;
        }

        if (rnd > .5) {
            if (Math.random() > .5) {
                this.richiesteInViaggio++;
            };

            if ((this.richiesteInViaggio > 0) && (Math.random() > .5)) {
                this.richiesteInViaggio--;
                this.richiesteSulPosto++;
            }

            if ((this.richiesteSulPosto > 0) && (Math.random() > .5)) {
                this.richiesteSulPosto--;
                this.richiesteInRientro++;
            }

            if ((this.richiesteInRientro > 0) && (Math.random() > .5)) {
                this.richiesteInRientro--;
            }
        }
    }
}
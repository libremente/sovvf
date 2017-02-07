﻿// Copyright (C) 2017 - CNVVF
//
// This file is part of SOVVF. SOVVF is free software: you can redistribute it and/or modify it under
// the terms of the GNU Affero General Public License as published by the Free Software Foundation,
// either version 3 of the License, or (at your option) any later version.
//
// SOVVF is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even
// the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
// General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License along with this program.
// If not, see <http://www.gnu.org/licenses/>.

namespace Modello.Classi.Soccorso.Squadre
{
    /// <summary>
    ///   Identifica una squadra utilizzata per evadere le segnalazioni relative ad una richiesta di
    ///   assistenza di soccorso ordinario.
    /// </summary>
    public class SquadraSoccorsoOrdinario : Squadra
    {
        /// <summary>
        ///   Classificazione dei Turni Operativi Standard.
        /// </summary>
        public enum TurnoEnum
        {
            /// <summary>
            ///   Indica il turno A del soccorso ordinario
            /// </summary>
            A,

            /// <summary>
            ///   Indica il turno B del soccorso ordinario
            /// </summary>
            B,

            /// <summary>
            ///   Indica il turno C del soccorso ordinario
            /// </summary>
            C,

            /// <summary>
            ///   Indica il turno D del soccorso ordinario
            /// </summary>
            D
        }

        /// <summary>
        ///   Ordine di partenza della squadra (es.: 1^ partenza, 2^ partenza,...).
        /// </summary>
        public int OrdinePartenza { get; set; }

        /// <summary>
        ///   Turno Operativo assegnato alla squadra.
        /// </summary>
        public TurnoEnum Turno { get; set; }
    }
}

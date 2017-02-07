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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modello.Classi.Soccorso.Eventi
{
    /// <summary>
    ///   E' l'evento di una nuova assegnazione della priorità per una richiesta.
    /// </summary>
    /// <remarks>
    ///   Per una stessa richiesta di assistenza si possono verificare molteplici eventi di
    ///   assegnazione della priorità, il che indica una variazione nel tempo della priorità
    ///   associata alla richiesta. Tali variazioni potrebbero anche avvenire a cura di procedure automatizzate.
    /// </remarks>
    public class AssegnazionePriorita : Evento
    {
        /// <summary>
        ///   E' la priorità che l'operatore assegna alla richiesta presa in carico
        /// </summary>
        /// <remarks>
        ///   L'ultimo evento di questa classe indica qual è la priorità dell'istanza di RichiestaAssistenza
        /// </remarks>
        public RichiestaAssistenza.Priorita Priorita { get; set; }
    }
}

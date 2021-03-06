﻿//-----------------------------------------------------------------------
// <copyright file="GetNumeroMezziSoccorsoOraInServizio_Fake.cs" company="CNVVF">
// Copyright (C) 2017 - CNVVF
//
// This file is part of SOVVF.
// SOVVF is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// SOVVF is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see http://www.gnu.org/licenses/.
// </copyright>
//-----------------------------------------------------------------------
using System.Collections.Generic;
using Modello.Servizi.Infrastruttura.GestioneSoccorso.Mezzi;

namespace SOVVF.FakeImplementations.Modello.GestioneSoccorso.Mezzi
{
    /// <summary>
    ///   Servizio fake che restituise il numero totale dei mezzi disponibili per il soccorso
    /// </summary>
    internal class GetNumeroMezziSoccorsoOraInServizio_Fake : IGetNumeroMezziSoccorsoOraInServizio
    {
        /// <summary>
        ///   Restituisce il numero totale dei Mezzi disponibili per il soccorso
        /// </summary>
        /// <param name="codice">elenco dei codici dell'Unità Operativa</param>
        /// <returns>Il numero totale dei Mezzi</returns>
        public int Get(IEnumerable<string> codice)
        {
            return 10;
        }
    }
}

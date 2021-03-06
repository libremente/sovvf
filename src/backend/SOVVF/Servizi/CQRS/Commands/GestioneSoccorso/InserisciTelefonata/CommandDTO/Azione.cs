﻿//-----------------------------------------------------------------------
// <copyright file="Azione.cs" company="CNVVF">
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
namespace Modello.Servizi.CQRS.Commands.GestioneSoccorso.InserisciTelefonata.CommandDTO
{
    /// <summary>
    ///   E' l'azione che si intende eseguire a valle dell'acquisizione della telefonata.
    /// </summary>
    public enum Azione
    {
        /// <summary>
        ///   La chiamata viene messa in coda, senza particolari azioni
        /// </summary>
        MettiInCoda,

        /// <summary>
        ///   La chiamata è considerata un falso allarme. Viene chiusa dopo l'acquisizione.
        /// </summary>
        FalsoAllarme,

        /// <summary>
        ///   La chiamata è considerata risolta e non necessita di intervento da parte dei VVF. Viene
        ///   chiusa dopo l'acquisizione.
        /// </summary>
        InterventoNonPiuNecessario
    }
}

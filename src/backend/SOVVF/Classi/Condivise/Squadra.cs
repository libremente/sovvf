﻿//-----------------------------------------------------------------------
// <copyright file="NonNecessario.cs" company="CNVVF">
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

using System;
using System.Collections.Generic;

namespace Modello.Classi.Condivise
{
    public class Squadra
    {
        /// <summary>
        ///   Enumera gli stati in cui un capopartenza partecipante ad una richiesta può trovarsi
        /// </summary>
        public enum StatoSquadra
        {
            /// <summary>
            ///   In viaggio verso il luogo del sinistro.
            /// </summary>
            InViaggio,

            /// <summary>
            ///   Giunta sul luogo del sinistro
            /// </summary>
            SulPosto,

            /// <summary>
            ///   In viaggio verso la sede di servizio
            /// </summary>
            InRientro,

            /// <summary>
            ///   Rientrata presso la sede di servizio
            /// </summary>
            RientrataInSede,

            /// <summary>
            ///   Fuori per ragioni di istituto
            /// </summary>
            Istituto
        }

        public Squadra(string Nome, StatoSquadra Stato, List<ComponenteSquadra> Componenti)
        {

            this.nome = Nome;
            this.stato = Stato;
            this.componenti = Componenti;
        }



        /// <summary>
        ///   Nominativo Squadra
        /// </summary>
        public string nome { get; set; }

        /// <summary>
        ///   Lo stato della squadra
        /// </summary>
        public StatoSquadra stato { get; set; }


        /// <summary>
        ///   Lista dei componenti della squadra
        /// </summary>
        public List<ComponenteSquadra> componenti { get; set; }

        /// <summary>
        ///   Indica l'istante in cui la squadra termina il suo impegno
        /// </summary>
        public DateTime? istanteTermineImpegno { get; set; }
    }
}

﻿//-----------------------------------------------------------------------
// <copyright file="SintesiRichiesteAssistenzaController.cs" company="CNVVF">
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
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using Modello.Classi.Soccorso.Eventi;
using Modello.Servizi.CQRS.Queries;
using Modello.Servizi.CQRS.Queries.GestioneSoccorso.SintesiRichiesteAssistenza.QueryDTO;
using Modello.Servizi.CQRS.Queries.GestioneSoccorso.SintesiRichiesteAssistenza.ResultDTO;
using Modello.Servizi.Infrastruttura.GestioneSoccorso.RicercaRichiesteAssistenza;
using SOVVF.FakeImplementations.Modello.GestioneSoccorso.GenerazioneRichieste;

namespace RestInterface.Controllers.Soccorso
{
    /// <summary>
    ///   Controller per l'accesso alla sintesi sulle richieste di assistenza
    /// </summary>
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class GeneraSintesiRichiesteAssistenzaController : ApiController
    {
        /// <summary>
        ///   Handler del servizio
        /// </summary>
        /// 
        private readonly IQueryHandler<SintesiRichiesteAssistenzaQuery, SintesiRichiesteAssistenzaResult> handler;

        /// <summary>
        ///   Costruttore della classe
        /// </summary>
        /// <param name="handler">L'handler iniettato del servizio</param>
        public GeneraSintesiRichiesteAssistenzaController(
            IQueryHandler<SintesiRichiesteAssistenzaQuery, SintesiRichiesteAssistenzaResult> handler)
        {
            this.handler = handler;
        }

        /// <summary>
        ///   Metodo di accesso alle richieste di assistenza
        /// </summary>
        /// <param name="filtro">Il filtro per le richieste</param>
        /// <returns>Le sintesi delle richieste di assistenza</returns>
        [HttpGet]        
        public Boolean Get(FiltroRicercaRichiesteAssistenza filtro)
        {

            Boolean stato = false;

            var session = HttpContext.Current.Session;
            if (session != null)
            {
                if (session["JSonRichieste"] == null)
                {
                    //VIENE UTILIZZATO SOLO PER TEST E FAKE INSERT SU MONGO DB
                   
                    var gi = new GeneratoreRichieste(
                    "RM",
                    4,
                    DateTime.Now.AddHours(-12),
                    DateTime.Now,
                    70,
                    30 * 60,
                    15 * 60,
                    60 * 60,
                    15 * 60,
                    new float[] { .85F, .7F, .4F, .3F, .1F });

                    var richieste = gi.Genera()
                        .OrderBy(r => (r.Eventi.First() as Evento).istante)
                        .ToList();
                   
                    session["JSonRichieste"] = richieste;
                    stato = true;
                }
                else { stato = true; }
            }

            var query = new SintesiRichiesteAssistenzaQuery()
            {
                Filtro = filtro
            };

            return stato;
        }


        [HttpPost]
        public SintesiRichiesteAssistenzaResult Post([FromBody]FiltroRicercaRichiesteAssistenza filtro)
        {
            
            var query = new SintesiRichiesteAssistenzaQuery()
            {
                Filtro = filtro
            };

            return this.handler.Handle(query);
        }


    }
}

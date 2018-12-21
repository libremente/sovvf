﻿//-----------------------------------------------------------------------
// <copyright file="SintesiRichiesteAssistenzaQueryHandler.cs" company="CNVVF">
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
using Modello.Classi.Autenticazione;
using Modello.Classi.Condivise;
using Modello.Classi.Soccorso.Eventi;
using Modello.Classi.Soccorso.Fonogramma;
using Modello.Servizi.CQRS.Queries.GestioneSoccorso.Shared.SintesiRichiestaAssistenza;
using Modello.Servizi.CQRS.Queries.GestioneSoccorso.SintesiRichiesteAssistenza.QueryDTO;
using Modello.Servizi.CQRS.Queries.GestioneSoccorso.SintesiRichiesteAssistenza.ResultDTO;
using Modello.Servizi.Infrastruttura.GestioneSoccorso.RicercaRichiesteAssistenza;
using Modello.Servizi.CQRS.Mappers.RichiestaSuSintesi;
using Modello.Classi.Soccorso;
using System.Web;
using System.Linq;

namespace Modello.Servizi.CQRS.Queries.GestioneSoccorso.SintesiRichiesteAssistenza
{
    /// <summary>
    ///   Query per l'accesso alla lista delle richieste di assistenza "di interesse". Quali sono le
    ///   richieste interessanti è specificato dal DTO di input. Ecco alcuni esempi di ricerca, in
    ///   base ai valori contenuti nel DTO di input:
    ///   <para>
    ///     - DTO vuoto: vengono selezionate le prime 10 richieste aperte più recenti, appartenenti
    ///       all'unità operativa a cui fa capo l'utente autenticato;
    ///   </para>
    ///   <para>
    ///     - DTO contenente una lista di unità operative: vengono selezionate le prime 10 richieste
    ///       aperte più recenti, appartenenti alle unità operative indicate dal DTO;
    ///   </para>
    ///   <para>
    ///     - DTO contenente una stringa chiave: la ricerca restituisce le prime 10 richieste più
    ///       rilevanti rispetto al testo chiave (full-text search);
    ///   </para>
    ///   <para>
    ///     - DTO contenente un riferimento geo-referenziato: la ricerca restituisce le prime 10
    ///       richieste più vicine al riferimento;
    ///   </para>
    ///   <para>
    ///     - DTO contenente un array di stati richiesta: la ricerca restituisce le prime 10
    ///       richieste negli stati specificati.
    ///   </para>
    /// </summary>
    public class SintesiRichiesteAssistenzaMarkerQueryHandler : IQueryHandler<SintesiRichiesteAssistenzaMarkerQuery, SintesiRichiesteAssistenzaMarkerResult>
    {
        /// <summary>
        ///   Istanza del servizio
        /// </summary>
        private readonly ICercaRichiesteAssistenza cercaRichiesteAssistenza;

        /// <summary>
        ///   Costruttore della classe
        /// </summary>
        /// <param name="cercaRichiesteAssistenza">L'istanza del servizio</param>
        public SintesiRichiesteAssistenzaMarkerQueryHandler(ICercaRichiesteAssistenza cercaRichiesteAssistenza)
        {
            this.cercaRichiesteAssistenza = cercaRichiesteAssistenza;
        }

        /// <summary>
        ///   Metodo di esecuzione della query
        /// </summary>
        /// <param name="query">Il DTO di ingresso della query</param>
        /// <returns>Il DTO di uscita della query</returns>
        public SintesiRichiesteAssistenzaMarkerResult Handle(SintesiRichiesteAssistenzaMarkerQuery query)
        {
            //var richieste = this.cercaRichiesteAssistenza.Get(query.Filtro);

#warning va realizzato il servizio di mapping delle richieste di assistenza sulla loro sintesi
            var sintesiRichiesta = new List<SintesiRichiestaMarker>();

            sintesiRichiesta = ElencoSintesiRichiestaMarker();

            return new SintesiRichiesteAssistenzaMarkerResult()
            {
                SintesiRichiestaMarker = sintesiRichiesta
            };
        }

        #region Interrogazione Fake da Session + Mapper della Richiesta sul Marker

        public static List<SintesiRichiestaMarker> ElencoSintesiRichiestaMarker()
        {

            var session = HttpContext.Current.Session;
            MapperListaRichieste mapper = new MapperListaRichieste();

            List<RichiestaAssistenza> listaRichieste = ((List<RichiestaAssistenza>)session["JSonRichieste"]).Where(p => !p.Chiusa).ToList();

            return mapper.MapRichiesteSuMarkerSintesi(listaRichieste).OrderBy(p => p.priorita).Where(p => Convert.ToInt16(p.id) >= 1).Take(99999).ToList(); ;

        }
       
        #endregion
    }
}

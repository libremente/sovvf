﻿//-----------------------------------------------------------------------
// <copyright file="TestMapperRichiestaSuSintesi.cs" company="CNVVF">
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
using Bogus;
using Modello.Classi.Organigramma;
using Modello.Classi.Soccorso;
using Modello.Classi.Soccorso.Mezzi;
using Modello.Servizi.CQRS.Mappers.RichiestaSuSintesi;
using Modello.Servizi.Infrastruttura.GestioneSoccorso.Mezzi;
using Modello.Servizi.Infrastruttura.Organigramma;
using Moq;
using NUnit.Framework;

namespace Modello.Test.Classi.Soccorso
{
    [TestFixture]
    public class TestMapperRichiestaSuSintesi
    {
        [Test]
        public void LIdRichiestaECorrettamenteMappato()
        {
            var richiesta = this.GetMockRichiestaBenFormata().Object;
            richiesta.Id = "TestId";
            var mapper = GetMapper();

            var sintesi = mapper.Map(richiesta);

            Assert.That(sintesi.id, Is.EqualTo(richiesta.Id));
        }

        [Test]
        public void IlCodiceRichiestaECorrettamenteMappato()
        {
            var richiesta = this.GetMockRichiestaBenFormata().Object;
            richiesta.Codice = "TestCod";
            var mapper = GetMapper();

            var sintesi = mapper.Map(richiesta);

            Assert.That(sintesi.codice, Is.EqualTo(richiesta.Codice));
        }

        [Test]
        public void UnaRichiestaRilevanteHaLaRilevanzaCorrettamenteMappata()
        {
            //var mockRichiesta = this.GetMockRichiestaBenFormata();
            //mockRichiesta
            //    .Setup(r => r.Rilevante)
            //    .Returns(true);
            //var richiesta = mockRichiesta.Object;
            //var mapper = GetMapper();

            //var sintesi = mapper.Map(richiesta);

            //Assert.That(sintesi.Rilevante, Is.True);
        }

        [Test]
        public void UnaRichiestaNonRilevanteHaLaRilevanzaCorrettamenteMappata()
        {
            //var mockRichiesta = this.GetMockRichiestaBenFormata();
            //mockRichiesta
            //    .Setup(r => r.Rilevante)
            //    .Returns(false);
            //var richiesta = mockRichiesta.Object;
            //var mapper = GetMapper();

            //var sintesi = mapper.Map(richiesta);

            //Assert.That(sintesi.Rilevante, Is.False);
        }

        [Test]
        public void UnaRichiestaHaLIstanteRicezioneRichiestaCorrettamenteMappato()
        {
            var istanteRicezione = DateTime.Now.AddSeconds(-100);
            var richiesta = this.GetMockRichiestaBenFormata(istanteRicezione).Object;
            var mapper = GetMapper();

            var sintesi = mapper.Map(richiesta);

            Assert.That(sintesi.istanteRicezioneRichiesta, Is.EqualTo(istanteRicezione));
        }

        [Test]
        public void UnaRichiestaHaLIstantePrimaAssegnazioneCorrettamenteMappato()
        {
            var istantePrimaAssegnazione = DateTime.Now.AddSeconds(10);
            var mockRichiesta = this.GetMockRichiestaBenFormata();
            mockRichiesta
                .Setup(r => r.IstantePrimaAssegnazione)
                .Returns(istantePrimaAssegnazione);
            var richiesta = mockRichiesta.Object;
            var mapper = GetMapper();

            var sintesi = mapper.Map(richiesta);

            Assert.That(sintesi.istantePrimaAssegnazione, Is.EqualTo(istantePrimaAssegnazione));
        }

        [Test]
        public void PresidiatoECorrettamenteMappatoSeFalse()
        {
            var mockRichiesta = this.GetMockRichiestaBenFormata();
            mockRichiesta
                .Setup(r => r.Presidiato)
                .Returns(false);
            var richiesta = mockRichiesta.Object;
            var mapper = GetMapper();

            var sintesi = mapper.Map(richiesta);

            //Assert.That(sintesi.Presidiato, Is.False);
        }

        [Test]
        public void PresidiatoECorrettamenteMappatoSeTrue()
        {
            var mockRichiesta = this.GetMockRichiestaBenFormata();
            mockRichiesta
                .Setup(r => r.Presidiato)
                .Returns(true);
            var richiesta = mockRichiesta.Object;
            var mapper = GetMapper();

            var sintesi = mapper.Map(richiesta);

            //Assert.That(sintesi.Presidiato, Is.True);
        }

        [Test]
        [Repeat(20)]
        public void LaPrioritaECorrettamenteMappata()
        {
            var mockRichiesta = this.GetMockRichiestaBenFormata();
            var faker = new Faker();
            var priorita = faker.PickRandom<RichiestaAssistenza.Priorita>();
            mockRichiesta
                .Setup(r => r.PrioritaRichiesta)
                .Returns(priorita);
            var richiesta = mockRichiesta.Object;
            var mapper = GetMapper();

            var sintesi = mapper.Map(richiesta);

            Assert.That(sintesi.priorita, Is.EqualTo(priorita));
        }

        [Test]
        public void LeTipologieSonoCorrettamenteMappate()
        {
        //    var tipologie = new TipologiaRichiesta[]
        //    {
        //            new TipologiaRichiesta("C1", "D1"),
        //            new TipologiaRichiesta("C2", "D2"),
        //            new TipologiaRichiesta("C3", "D3"),
        //            new TipologiaRichiesta("C4", "D4")
        //    };
        //    var mockRichiesta = this.GetMockRichiestaBenFormata(istanteRicezione: null, tipologie: tipologie);
        //    mockRichiesta
        //        .Setup(r => r.Tipologie)
        //        .Returns(tipologie);
        //    var richiesta = mockRichiesta.Object;
        //    var mapper = GetMapper();

        //    var sintesi = mapper.Map(richiesta);

        //    CollectionAssert.AreEqual(new[] { "D1", "D2", "D3", "D4" }, sintesi.Tipologie);
        }

        [Test]
        public void LaDescrizioneECorrettamenteMappata()
        {
            var mockRichiesta = this.GetMockRichiestaBenFormata();
            mockRichiesta
                .Setup(r => r.Descrizione)
                .Returns("DescXYZ");
            var richiesta = mockRichiesta.Object;
            var mapper = GetMapper();

            var sintesi = mapper.Map(richiesta);

            Assert.That(sintesi.descrizione, Is.EqualTo("DescXYZ"));
        }

        [Test]
        public void IlRichiedenteECorrettamenteMappato()
        {
        //    var mockRichiesta = this.GetMockRichiestaBenFormata();
        //    mockRichiesta
        //        .Setup(r => r.Richiedente)
        //        .Returns("TestRichiedente");
        //    var richiesta = mockRichiesta.Object;
        //    var mapper = GetMapper();

        //    var sintesi = mapper.Map(richiesta);

        //    Assert.That(sintesi.Richiedente, Is.EqualTo("TestRichiedente"));
        }

        [Test]
        public void IlNumeroRichiedenteECorrettamenteMappato()
        {
            var mockRichiesta = this.GetMockRichiestaBenFormata();
            mockRichiesta
                .Setup(r => r.NumeroRichiedente)
                .Returns("TestNumeroRichiedente");
            var richiesta = mockRichiesta.Object;
            var mapper = GetMapper();

            var sintesi = mapper.Map(richiesta);

            //Assert.That(sintesi.NumeroRichiedente, Is.EqualTo("TestNumeroRichiedente"));
        }

        [Test]
        public void LaDescrizioneLocalitaECorrettamenteMappata()
        {
            var mockRichiesta = this.GetMockRichiestaBenFormata();
            mockRichiesta
                .Setup(r => r.Indirizzo)
                .Returns("TestIndirizzo");
            var richiesta = mockRichiesta.Object;
            var mapper = GetMapper();

            var sintesi = mapper.Map(richiesta);

            //Assert.That(sintesi.DescrizioneLocalita, Is.EqualTo("TestIndirizzo"));
        }

        [Test]
        public void LeNoteLocalitaSonoCorrettamenteMappate()
        {
            var mockRichiesta = this.GetMockRichiestaBenFormata();
            mockRichiesta
                .Setup(r => r.NoteLocalita)
                .Returns("TestNotelocalita");
            var richiesta = mockRichiesta.Object;
            var mapper = GetMapper();

            var sintesi = mapper.Map(richiesta);

            //Assert.That(sintesi.NoteLocalita, Is.EqualTo("TestNotelocalita"));
        }

        [Test]
        public void LeZoneEmergenzaSonoCorrettamenteMappate()
        {
            var mockRichiesta = this.GetMockRichiestaBenFormata();
            mockRichiesta
                .Setup(r => r.ZoneEmergenza)
                .Returns(new[] { "ZonaEm1", "ZonaEm2", "ZonaEm3" });
            var richiesta = mockRichiesta.Object;
            var mapper = GetMapper();

            var sintesi = mapper.Map(richiesta);

            CollectionAssert.AreEqual(sintesi.zoneEmergenza, new[] { "ZonaEm1", "ZonaEm2", "ZonaEm3" });
        }

        [Test]
        public void LIstantePresaInCaricoECorrettamenteMappato()
        {
            var mockRichiesta = this.GetMockRichiestaBenFormata();
            var now = DateTime.Now;
            mockRichiesta
                .Setup(r => r.IstantePresaInCarico)
                .Returns(now);
            var richiesta = mockRichiesta.Object;
            var mapper = GetMapper();

            var sintesi = mapper.Map(richiesta);

            Assert.That(sintesi.istantePresaInCarico.Value, Is.EqualTo(now));
        }

        [Test]
        public void LIstantePresaInCaricoECorrettamenteMappatoSeENull()
        {
            var mockRichiesta = this.GetMockRichiestaBenFormata();
            var now = DateTime.Now;
            mockRichiesta
                .Setup(r => r.IstantePresaInCarico)
                .Returns((DateTime?)null);
            var richiesta = mockRichiesta.Object;
            var mapper = GetMapper();

            var sintesi = mapper.Map(richiesta);

            Assert.That(sintesi.istantePresaInCarico.HasValue, Is.False);
        }

        [Test]
        public void ICodiciUODiCompetenzaSonoCorrettamenteMappati()
        {
            var mockRichiesta = this.GetMockRichiestaBenFormata();
            mockRichiesta
                .Setup(r => r.CodiciUOCompetenza)
                .Returns(new[] { "CodUO1", "CodUO2", "CodUO3" });
            var richiesta = mockRichiesta.Object;
            var mapper = GetMapper();

            var sintesi = mapper.Map(richiesta);

            //CollectionAssert.AreEqual(sintesi.DescrizioneCompetenze, new[] { "Descrizione CodUO1", "Descrizione CodUO2", "Descrizione CodUO3" });
        }

        [Test]
        public void IlCodiceSchedaNueECorrettamenteMappato()
        {
            var mockRichiesta = this.GetMockRichiestaBenFormata();
            mockRichiesta
                .Setup(r => r.CodiceSchedaNue)
                .Returns("TestCodiceNue");
            var richiesta = mockRichiesta.Object;
            var mapper = GetMapper();

            var sintesi = mapper.Map(richiesta);

            Assert.That(sintesi.codiceSchedaNue, Is.EqualTo("TestCodiceNue"));
        }

        [Test]
        [Repeat(20)]
        public void LoStatoInvioFonogrammaECorrettamenteMappato()
        {
            var mockRichiesta = this.GetMockRichiestaBenFormata();
            var richiesta = mockRichiesta.Object;
            var mapper = GetMapper();

            var faker = new Faker();
            var statoFonogrammaRichiesta = faker.PickRandom<Modello.Classi.Soccorso.Fonogramma.IStatoFonogramma>(
                new Modello.Classi.Soccorso.Fonogramma.NonNecessario(),
                new Modello.Classi.Soccorso.Fonogramma.DaInviare(),
                new Modello.Classi.Soccorso.Fonogramma.Inviato());
            mockRichiesta
                .Setup(r => r.StatoInvioFonogramma)
                .Returns(statoFonogrammaRichiesta);

            var sintesi = mapper.Map(richiesta);

            //Assert.That(sintesi.StatoFonogrammaRichiesta, Is.EqualTo(statoFonogrammaRichiesta.Codice));
        }

        [Test]
        [Repeat(20)]
        public void LaDescrizioneInvioFonogrammaECorrettamenteMappata()
        {
            var mockRichiesta = this.GetMockRichiestaBenFormata();
            var richiesta = mockRichiesta.Object;
            var mapper = GetMapper();

            var faker = new Faker();
            var statoFonogrammaRichiesta = faker.PickRandom<Modello.Classi.Soccorso.Fonogramma.IStatoFonogramma>(
                new Modello.Classi.Soccorso.Fonogramma.NonNecessario(),
                new Modello.Classi.Soccorso.Fonogramma.DaInviare(),
                new Modello.Classi.Soccorso.Fonogramma.Inviato());
            mockRichiesta
                .Setup(r => r.StatoInvioFonogramma)
                .Returns(statoFonogrammaRichiesta);

            var sintesi = mapper.Map(richiesta);

            //Assert.That(sintesi.DescrizioneStatoFonogramma, Is.EqualTo(statoFonogrammaRichiesta.Descrizione));
        }

        [Test]
        [Repeat(20)]
        public void IlCodiceComplessitaECorrettamenteMappato()
        {
            var mockRichiesta = this.GetMockRichiestaBenFormata();
            var richiesta = mockRichiesta.Object;
            var mapper = GetMapper();

            var faker = new Faker();
            var complessita = faker.PickRandom<Modello.Classi.Soccorso.Complessita.IComplessita>(
                new Modello.Classi.Soccorso.Complessita.Bassa(),
                new Modello.Classi.Soccorso.Complessita.Media(),
                new Modello.Classi.Soccorso.Complessita.Alta());
            mockRichiesta
                .Setup(r => r.Complessita)
                .Returns(complessita);

            var sintesi = mapper.Map(richiesta);

            //Assert.That(sintesi.ComplessitaRichiesta, Is.EqualTo(complessita.Codice));
        }

        [Test]
        [Repeat(20)]
        public void LaDescrizioneComplessitaECorrettamenteMappata()
        {
            var mockRichiesta = this.GetMockRichiestaBenFormata();
            var richiesta = mockRichiesta.Object;
            var mapper = GetMapper();

            var faker = new Faker();
            var complessita = faker.PickRandom<Modello.Classi.Soccorso.Complessita.IComplessita>(
                new Modello.Classi.Soccorso.Complessita.Bassa(),
                new Modello.Classi.Soccorso.Complessita.Media(),
                new Modello.Classi.Soccorso.Complessita.Alta());
            mockRichiesta
                .Setup(r => r.Complessita)
                .Returns(complessita);

            var sintesi = mapper.Map(richiesta);

            //Assert.That(sintesi.DescrizioneComplessita, Is.EqualTo(complessita.Descrizione));
        }

        private static MapperRichiestaSuSintesi GetMapper()
        {
            var mockGetUnitaOperativaPerCodice = new Mock<IGetUnitaOperativaPerCodice>();
            mockGetUnitaOperativaPerCodice
                .Setup(m => m.Get(It.IsAny<string>()))
                .Returns<string>(param => new UnitaOperativa(param, $"Descrizione {param}"));
            var mockGetMezzoByCodice = new Mock<IGetMezzoByCodice>();
            mockGetMezzoByCodice
                .Setup(mock => mock.Get(It.IsAny<string>()))
                .Returns<string>(codice => new Mezzo(codice, "DescrizioneMock", "GenereMock"));

            return new MapperRichiestaSuSintesi(mockGetUnitaOperativaPerCodice.Object, new MapperMezzoSuSintesi(mockGetMezzoByCodice.Object));
        }

        private Mock<RichiestaAssistenza> GetMockRichiestaBenFormata(
            DateTime? istanteRicezione = null,
            IEnumerable<TipologiaRichiesta> tipologie = null)
        {
            if (!istanteRicezione.HasValue)
            {
                istanteRicezione = DateTime.Now;
            }

            var mockRichiesta = new Mock<RichiestaAssistenza>();
            //mockRichiesta
            //    .Setup(r => r.IstanteRicezioneRichiesta)
            //    .Returns(istanteRicezione.Value);
            //mockRichiesta
            //        .Setup(r => r.Tipologie)
            //        .Returns(tipologie == null ? new List<TipologiaRichiesta>() : tipologie.ToList());
            //mockRichiesta
            //    .Setup(r => r.StatoInvioFonogramma)
            //    .Returns(new Modello.Classi.Soccorso.Fonogramma.NonNecessario());
            //mockRichiesta
            //    .Setup(r => r.Complessita)
            //    .Returns(new Modello.Classi.Soccorso.Complessita.Bassa());

            return mockRichiesta;
        }
    }
}

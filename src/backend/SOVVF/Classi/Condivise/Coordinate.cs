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

namespace Modello.Classi.Condivise
{
    public class Coordinate
    {

        public Coordinate(double Latitudine, double Longitudine)
        {
            this.latitudine = Latitudine;
            this.longitudine = Longitudine;
        }

        /// <summary>
        /// Latitudine
        /// </summary>
        public double latitudine { get; set; }

        /// <summary>
        /// Latitudine
        /// </summary>
        public double longitudine { get; set; }


        /// <summary>
        /// Latitudine
        /// </summary>
        public double Latitudine { get; set; }

        /// <summary>
        /// Latitudine
        /// </summary>
        public double Longitudine { get; set; }



    }
}
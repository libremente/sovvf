import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { routing } from './rigaElencoRichiesteDiAssistenza.routing';
import { rigaElencoRichiesteDiAssistenzaModuleEarly } from "./rigaElencoRichiesteDiAssistenza.early.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    rigaElencoRichiesteDiAssistenzaModuleEarly,
    routing,
  ],
  declarations: [
  ]
})
export class rigaElencoRichiesteDiAssistenzaModule {}
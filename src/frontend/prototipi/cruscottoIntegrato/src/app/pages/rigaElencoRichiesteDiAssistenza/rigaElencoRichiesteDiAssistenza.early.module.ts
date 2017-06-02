import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { rigaElencoRichiesteDiAssistenzaComponent } from "./rigaElencoRichiesteDiAssistenza.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    rigaElencoRichiesteDiAssistenzaComponent    
  ],
  exports: [
    rigaElencoRichiesteDiAssistenzaComponent
  ],
})
export class rigaElencoRichiesteDiAssistenzaModuleEarly {}
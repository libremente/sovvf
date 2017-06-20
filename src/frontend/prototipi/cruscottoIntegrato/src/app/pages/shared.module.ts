import { NgModule } from '@angular/core';

import { rigaElencoRichiesteDiAssistenzaComponent } from './rigaElencoRichiesteDiAssistenza/rigaElencoRichiesteDiAssistenza.component';
import { mappaSOVVF } from './dashboard/mappaSOVVF'

@NgModule({
  imports: [
  ],
  
  declarations: [
      rigaElencoRichiesteDiAssistenzaComponent
      ,mappaSOVVF
  ],
  
  exports: [
      rigaElencoRichiesteDiAssistenzaComponent
      ,mappaSOVVF    
  ]
})

export class SharedModule {
}

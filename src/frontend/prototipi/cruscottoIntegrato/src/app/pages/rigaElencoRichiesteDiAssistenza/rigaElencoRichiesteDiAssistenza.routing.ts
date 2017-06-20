import { Routes, RouterModule } from '@angular/router';

import { WrapperComponent } from "app/pages/rigaElencoRichiesteDiAssistenza/wrapper/wrapper.component";

const routes: Routes = [
  {
    path: '',
    // component:rigaElencoRichiesteDiAssistenzaComponent
    component: WrapperComponent
  }
];

export const routing = RouterModule.forChild(routes);
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RicercaService } from "./ricerca/ricerca.service";
import { Ng2CompleterModule } from "ng2-completer";
import {AutoCompleteModule} from 'primeng/primeng';
import { RicercaTipologieService } from "app/ricerca-tipologie/ricerca-tipologie.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    Ng2CompleterModule,
    AutoCompleteModule,
    FormsModule,
    HttpModule
  ],
  providers: [ RicercaService, RicercaTipologieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {PipeModule} from './shared/pipes/pipe.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import * as Shared from './shared/';
import {MeteoService} from './shared/meteo/meteo-service.service';
import {AgmCoreModule} from '@agm/core';
import {AgmComponent} from './maps/agm/agm.component';
import {MapsService} from './maps/maps-service/maps-service.service';
import {MapsServiceFake} from './maps/maps-service/maps-service.service.fake';
import {MarkerService} from './maps/marker-service/marker-service.service';
import {MarkedService} from './maps/marked-service/marked-service.service';
import {AnimationPipe} from './maps/agm/agm-pipe/animation.pipe';
import {IconPipe} from './maps/agm/agm-pipe/icon.pipe';
import {AppComponent} from './app.component';
import {NavComponent} from './maps/nav/nav.component';
import {MapsComponent} from './maps/maps.component';
import {environment} from '../environments/environment';



@NgModule({
    declarations: [
        AppComponent,
        // start import of Shared Declarations
        [],
        // end import of Shared Declarations
        AgmComponent,
        AnimationPipe,
        IconPipe,
        NavComponent,
        MapsComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        PipeModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: environment.apiUrl.maps.agm.key
        })
    ],
    providers: [
        {provide: MapsService, useClass: MapsService},
        {provide: MarkerService, useClass: MarkerService},
        {provide: MarkedService, useClass: MarkedService},
        {provide: MeteoService, useClass: MeteoService}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_TIPOLOGIE, TipologieInterface } from '../settings/tipologie';
import { environment } from '../../../environments/environment';
import { SignalRService } from '../signalr/signalR.service';
import { Subscription } from 'rxjs';
import { SIGNALR_CONFIG } from '../signalr/signalR.config';

const API_URL = environment.apiUrl.elencoTipologie;

@Injectable()
export class AppLoadService {

    subscription = new Subscription;
    checkConnectionSignalR: boolean;


    constructor(private http: HttpClient, private signalR: SignalRService) {
        if (!SIGNALR_CONFIG.signlaRByPass) {
            this.signalR.initSubscription();
            this.subscription.add(this.signalR.checkConnection().subscribe(result => {
                this.checkConnectionSignalR = result;
                if (result) {
                    this.signalR.getContextId();
                }
            }));
        }
    }

    initializeApp(): Promise<any> {
        return new Promise((resolve) => {
            if (!SIGNALR_CONFIG.signlaRByPass) {
                if (this.checkConnectionSignalR) {
                    resolve();
                } else {
                    const interval = setInterval(() => {
                        if (this.checkConnectionSignalR) {
                            resolve();
                            clearInterval(interval);
                        }
                    }, 3000);
                }
            } else {
                this.signalR.byPassSignalR();
                resolve();
            }
        });
    }

    getSettings(): Promise<any> {
        return this.http.get<TipologieInterface[]>(API_URL)
            .toPromise()
            .then(settings => {
                APP_TIPOLOGIE.push(...settings);
                return settings;
            }).catch();
    }
}

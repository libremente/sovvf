import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../_services';
import { RoutesPath } from '../../../shared/enum/routes-path.enum';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.ruolo) {
            if (route.data.roles && route.data.roles.indexOf(currentUser.ruolo[0].descrizione) === -1) {
                /**
                 * utente loggato ma senza permesso
                 */
                this.router.navigate(['/' + RoutesPath.Logged]);
                return false;
            }

            return true;
        }

        this.router.navigate(['/' + RoutesPath.Login], {queryParams: {returnUrl: state.url}});
        return false;
    }
}

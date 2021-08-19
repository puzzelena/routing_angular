import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, 
        CanActivate, 
        CanActivateChild, 
        Router, 
        RouterStateSnapshot 
    } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";

@Injectable()
// here we implement CanActivate interface, it is provided by the angular router package
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router){

    }
    // it is needed to handle the data
    // we can activate it by adding Observable as returning something
    canActivate(route: ActivatedRouteSnapshot,
        // this Observable will wrap a boolean
        // alternatively it will return a Promise also returning a boolean
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.authService.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    if(authenticated){
                        return true;
                    } else {
                        this.router.navigate(['/']);
                    }
                }
            );
    }

    // this interface require canActivateChild method

    canActivateChild(route: ActivatedRouteSnapshot,
        // this Observable will wrap a boolean
        // alternatively it will return a Promise also returning a boolean
        // which takes the same arguments in the methods
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.canActivate(route, state)
    }
}
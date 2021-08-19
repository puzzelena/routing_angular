import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, 
        CanActivate, 
        Router, 
        RouterStateSnapshot 
    } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";

@Injectable()
// here we implement CanActivate interface, it is provided by the angular router package
export class AuthGuard implements CanActivate {
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
}
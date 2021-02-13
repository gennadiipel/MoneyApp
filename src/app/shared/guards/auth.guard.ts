import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()

export class AuthGuard implements CanActivate {
    
    constructor (
        private _authService: AuthService,
        private _router: Router
    ) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean | UrlTree> {
        const isAuth: boolean = this._authService.isAuthenticated()

        if (isAuth) return isAuth;
        else {
            this._authService.logout()
            this._router.navigate(['/login'])
        }
    }

}
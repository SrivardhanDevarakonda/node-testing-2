import { AuthenticateService } from './authenticate.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivateChild } from '@angular/router';

@Injectable()

export class GuardService implements CanActivate, CanActivateChild{
    
    constructor(private authservice : AuthenticateService, private router : Router){}
    
    canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean{
        console.log('canActivate guard is activated')
        return this.checkLogin(state.url)
    }

    canActivateChild(route : ActivatedRouteSnapshot, state : RouterStateSnapshot){
        console.log('canActivate child guard is activated')
        return this.canActivate(route,state)
    }

    checkLogin(url:string) : boolean{
        if(this.authservice.isLoggedIn) return true

        this.authservice.redirectUrl = url
        console.log( 'redirect url: ',this.authservice.redirectUrl)
        this.router.navigate(['/login'])
        return false
    }

}
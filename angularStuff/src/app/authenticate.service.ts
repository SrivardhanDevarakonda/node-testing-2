import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()

export class AuthenticateService {
    
    isLoggedIn = false
    redirectUrl : String

    login() : Observable <boolean>{
        return Observable.of(true).delay(1000).do(val => this.isLoggedIn=true)
    }

    logout() : void{
        this.isLoggedIn = false
    }
   
}
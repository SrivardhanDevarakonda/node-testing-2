import { Router } from '@angular/router';
import { AuthenticateService } from './../authenticate.service';
import { MovieService } from './../Movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl:  './login.component.html'
})
export class LoginComponent implements OnInit {
    check=true;

    message: any;
    userName: any;
    password: string

    constructor(private movieService:MovieService,
                 private authService:AuthenticateService,
                  private router:Router) { }

    ngOnInit() { }

    onLogin(){
        const credentials = {
            userName : this.userName,
            password : this.password
        }
        this.movieService.loginUser(credentials).subscribe(success => {
            this.message = success
            this.check = this.message.isValid
            if(this.message.isValid){
                    this.authService.login().subscribe(()=>{
                if(this.authService.isLoggedIn){
                    let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/user'
                    this.router.navigate([redirect])
                }
        })
            }

        })
        
        
    }
}
import { Router } from '@angular/router';
import { MovieService } from './../Movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

    userName : String
    password : String
    message : any

    constructor(private movieService:MovieService, private router:Router) { }

    ngOnInit() { }

    onSignUp(){
        const newUser = {
            userName : this.userName,
            password : this.password
        }
        this.movieService.createUser(newUser).subscribe(success => {
            this.message = success
            console.log(this.message)
            this.router.navigate(['login'])
            })

    }
}
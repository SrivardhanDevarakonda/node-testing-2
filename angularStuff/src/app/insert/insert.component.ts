import { Router } from '@angular/router';
import { MovieService } from './../Movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-insert',
    templateUrl: './insert.component.html'
})
export class InsertComponent implements OnInit {
    movies: any;
    message: any;
    movieName: String
    description : String
    yearReleased : Number
    rating : Number
    actors : String
    directors : String
    imageUrl : String

    constructor(private movieService:MovieService,private router:Router) { }

    ngOnInit() {  }

    onUpload(){
     let array_actors = this.actors.split(',')
     let array_directors = this.directors.split(',')
    
 const newMovie ={
    movieName : this.movieName,
    description : this.description,
    yearReleased : this.yearReleased,
    rating : this.rating,
    actors : array_actors,
    directors : array_directors,
    imageUrl : this.imageUrl
    }
    this.movieService.uploadMovies(newMovie).subscribe(success => {
            this.message = success
            console.log(this.message)
        })
        
   this.router.navigate(['user'])
 }

   
}
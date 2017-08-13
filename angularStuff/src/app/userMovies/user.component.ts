import { MovieService, IMovie } from './../Movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls:['./user.component.css']
})
export class UserComponent implements OnInit {

    movie: IMovie

    movies: IMovie[] =[]

    _id : String
    message: any;
    name: String
    description : String
    yearReleased : Number
    rating : Number
    actors : String
    directors : String
    imageUrl : String

    visible:Boolean=false

    constructor(private activeRoute:ActivatedRoute, private movieService:MovieService,private router:Router) { }

    ngOnInit() { 
        this.movieService.getMovies()
    .subscribe(movies => {
        this.movies = movies
    })

    }

    onUpdate(movie){
        this.visible = true

        this.movie = movie
    }
    cancel(){
        this.visible =false
    }
    
    onUpdateMovie(){
        let array_directors:string[]
        let array_actors:string[]

        if(this.directors!==undefined){
        array_directors = this.directors.split(',')
        }
        if(this.actors!==undefined){
            array_actors = this.actors.split(',')
        }
        
        const updatedMovie ={
            _id : this.movie._id,
            movieName : this.name,
            description : this.description,
            yearReleased : this.yearReleased,
            rating : this.rating,
            actors : array_actors,
            directors : array_directors,
            imageUrl : this.imageUrl
        }
        this.movieService.updateMovies(updatedMovie).subscribe(success => {
            this.message = success
            this.ngOnInit()
            })
        this.visible =false
    }

 deleteMovie(id){
    let movies = this.movies
    this.movieService.deleteMovie(id)
      .subscribe(data=>{
        if(data.n==1){
          for (var i = 0; i < movies.length; i++) {
            if(movies[i]._id == id){
              movies.splice(i,1);
            }    
          }
        }
      })
  }


}
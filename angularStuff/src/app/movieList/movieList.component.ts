import { MovieService, IMovie } from './../Movie.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-movieList',
    templateUrl: './movieList.component.html'
}) 
export class MovieListComponent implements OnInit {

   moviesList : IMovie[] = []
  input:string
  constructor(private movieInstance : MovieService){}

ngOnInit(){

  this.movieInstance.getMovies()
    .subscribe(moviess => this.moviesList = moviess)

}

}
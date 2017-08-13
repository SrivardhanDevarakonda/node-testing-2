import { MovieService, IMovie, IActor } from './../Movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-movieDetails',
    templateUrl: './movieDetails.component.html'
})
export class MovieDetailsComponent implements OnInit {
    director: any
    isValidActor=false
    isValidDirector=false
    actor: IActor[]
    details: IMovie[] = []
    id:string
    constructor(private activeRoute:ActivatedRoute, private router:Router, private movieService : MovieService ) { }

    ngOnInit() { 
         this.id = this.activeRoute.snapshot.params['_id']
         this.movieService.getSelectedMovie(this.id)
             .subscribe(moviess => this.details = moviess) 
     }

     
     onSelectActor(actorName){
    this.movieService.getActorByName(actorName).subscribe(actor =>{      
        this.actor = actor
        if(actor){
          this.isValidActor = true
          this.isValidDirector = false
        }
  
    })
  }

  onSelectDirector(directorname){
    this.movieService.getDirectorByName(directorname).subscribe(director =>{      
        this.director = director
        
        if(director){
          this.isValidDirector = true
          this.isValidActor = false
        }
  
    })
  }


}
    
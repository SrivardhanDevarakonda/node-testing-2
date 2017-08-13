import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'
import 'rxjs/add/operator/map'

export interface IMovie{
    _id : String
    movieName : String
    description : String
    yearReleased : Number
    rating : Number
    actors : Array<String>
    directors : Array<String>
    imageUrl : String
}

export interface IActor{
    actorName:String
    age:Number
    gender:String
    agent:String
    moviesActed:Array<String>
}

@Injectable()

export class MovieService {
 
    constructor(private http : Http) { }

    getMovies(){
        return this.http.get('http://localhost:3000/sri/movies')
            .map(res => res.json())
    }

    getSelectedMovie(id){
        return this.http.get('http://localhost:3000/sri/movies/' + id)
            .map(res => res.json())
    }


    uploadMovies(newMovie){
        let headers = new Headers()
        headers.append('Content-Type','application/json')
        return this.http.post('http://localhost:3000/sri/movies',newMovie,{headers:headers})
            .map(res => res.json())
    }

     updateMovies(updatedMovie){
        let headers = new Headers()
        headers.append('Content-Type','application/json')
        return this.http.put('http://localhost:3000/sri/movies/'+updatedMovie._id,updatedMovie,{headers:headers})
            .map(res => res.json())
    }

    deleteMovie(id){
        return this.http.delete('http://localhost:3000/sri/movies/' + id)
            .map(res => res.json())
    }

    createUser(newUser){
        let headers = new Headers()
        headers.append('Content-Type','application/json')
        return this.http.post('http://localhost:3000/sri/register',newUser,{headers:headers})
            .map(res => res.json())
    }

    loginUser(credentials){
       let headers = new Headers()
        headers.append('Content-Type','application/json')
        return this.http.post('http://localhost:3000/sri/login',credentials,{headers:headers})
            .map(res => res.json())
    }

    //get actor by name..
    getActorByName(name){
        return this.http.get('http://localhost:3000/sri/actor/'+name)
            .map(res => res.json())
    }

    //get actor by name..
    getDirectorByName(name){
        return this.http.get('http://localhost:3000/sri/director/'+name)
            .map(res => res.json())
    }
}
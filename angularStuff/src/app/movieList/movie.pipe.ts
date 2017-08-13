import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'MoviePipe'
})
export class MoviePipe implements PipeTransform {

    transform(movies: any[], args: string): any {
      if (!args){
        return movies;
      } else {
        return movies
          .filter(movie => 
            movie.movieName.toLowerCase().includes(args.toLowerCase())
          );
      }
    }

}
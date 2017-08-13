import { PageNotFoundComponent } from './404.component';
import { UserModule } from './userMovies/user.module';
import { MoviePipe } from './movieList/movie.pipe';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movieDetails/movieDetails.component';
import { MovieListComponent } from './movieList/movieList.component';

import { appRouting } from './app.router';

import { MovieService } from './Movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    MoviePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
    UserModule
  ],
  providers: [ MovieService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

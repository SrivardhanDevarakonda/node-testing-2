import { PageNotFoundComponent } from './404.component';
import { GuardService } from './guard.component';
import { UserComponent } from './userMovies/user.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movieDetails/movieDetails.component';
import { MovieListComponent } from './movieList/movieList.component';


import { RouterModule, Routes } from '@angular/router';
    
const routes: Routes = [
        { path: 'movies', component: MovieListComponent },
        { path: 'movieDetails/:_id', component: MovieDetailsComponent},
        { path: 'user',
          component: UserComponent,
          canActivate: [GuardService],
          loadChildren: 'app/userMovies/user.module.ts#UserModule' 
        }, 
        { path: 'login', component: LoginComponent }, 
        { path: 'signup', component: SignupComponent },
        { path: '', pathMatch:'full', redirectTo: 'movies' },
        { path: '**', component: PageNotFoundComponent}
    ];
    
    export const appRouting = RouterModule.forRoot(routes);
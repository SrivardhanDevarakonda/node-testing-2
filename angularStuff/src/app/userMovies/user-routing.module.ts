import { InsertComponent } from './../insert/insert.component';
import { GuardService } from './../guard.component';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const userRoutes : Routes = [
    {path : 'user',
     component : UserComponent,
     canActivate : [GuardService],
     canActivateChild : [GuardService],
     children : [ { path: 'insert', component: InsertComponent}  ]
}
]

@NgModule({
    imports : [RouterModule.forChild(userRoutes)],
    exports : [RouterModule]
})

export class UserRoutingModule{ }
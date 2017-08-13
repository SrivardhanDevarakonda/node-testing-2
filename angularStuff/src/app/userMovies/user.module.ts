import { AuthenticateService } from './../authenticate.service';
import { GuardService } from './../guard.component';
import { InsertComponent } from './../insert/insert.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [ BrowserModule, FormsModule, UserRoutingModule ],

    declarations: [ UserComponent,
                    InsertComponent
                ],

    providers: [GuardService, AuthenticateService]
})
export class UserModule { }
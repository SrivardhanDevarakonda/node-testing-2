import { Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService : AuthenticateService, private router : Router){}

  onLogOut(){
        this.authService.logout()
        this.router.navigate(['movies'])
    }


}

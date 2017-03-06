import { Component } from '@angular/core';
import {DataService} from './data/data.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dataService: DataService, public authService: AuthService) { 

  }

  title = 'app works!';

}

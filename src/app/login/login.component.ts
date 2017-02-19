//http://angularjs.blogspot.com.au/2016/11/easy-angular-authentication-with-json.html
import { Component, OnInit } from '@angular/core';
import {DataService} from '../data/data.service';

interface Credentials {
  username: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: Credentials;
  constructor(private dataService: DataService) { }

  onLogin(credentials){
    this.dataService.login(credentials);
  }
}

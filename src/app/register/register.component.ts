import {Component} from '@angular/core';
import {DataService} from '../data/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: String;
  password: String;

  constructor(private dataService: DataService) { }
    onRegister(event, username, name, password) {
    event.preventDefault();
    this.dataService.register(username, name, password);
  }

}

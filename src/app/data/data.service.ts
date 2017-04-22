import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router, RouterLink } from '@angular/router';
import { ConfigService } from '../config/config.service';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor(public router: Router, public http: Http, public config: ConfigService, private authHttp: AuthHttp) { }

  public jwtKey: string = 'jwt';

  login(username, password) {
    let body = JSON.stringify({ username, password });
    this.http.post(this.config.loginUrl, body, { headers: this.config.contentHeaders })
      .subscribe(
      response => {
        localStorage.setItem(this.jwtKey , response.json().id_token);
        this.router.navigateByUrl('/');
      },
      error => {
        alert(error.text());
        console.log(error.text());
      }
      );
  }

   logout() {
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('/login');
  }

  //Error logging 
    log(error) {
    let body = JSON.stringify(error.message);
    this.http.post(this.config.logUrl, body, { headers: this.config.contentHeaders })
      .subscribe(
      response => {
        
      },
      error => {
        console.log(error.text());
      }
      );
  }




    getSecureStuff(stuffUrl) {

    return this.authHttp.get(this.config.protectedApiUrl + stuffUrl)
      .map(res => res.json());
      // .subscribe(
      //   data =>  this.stuff = data.stuff,
      //   error => console.log(error)
      // );
  }

    getUnSecureStuff(stuffUrl) {
    return this.authHttp.get(this.config.apiUrl + stuffUrl)
      .map(res => res.json());
      // .subscribe(
      //   data =>  this.stuff = data.stuff,
      //   error => console.log(error)
      // );
  }

}

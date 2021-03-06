import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router, RouterLink } from '@angular/router';
import { ConfigService } from '../config/config.service';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

class TableItem {
    tableName: string;
    partitionKey:string;
    rowKey:string;
    data: any;
    constructor(tableName: string, partitionKey: string, rowkey: string, data: any) {
        this.tableName = tableName;
        this.partitionKey = partitionKey;
        this.rowKey = rowkey;
        this.data = data;
    }
}

@Injectable()
export class DataService {
  constructor(public router: Router, public http: Http, public config: ConfigService, private authHttp: AuthHttp) { }

  public jwtKey: string = 'jwt';

  handleError(error){
      alert(error.text());  
      console.log(error.text())
  }


  register(userName, name, password){
    let data = {"password": password};
    let user = new TableItem('usersAuth', userName, name, data );   

    let body = JSON.stringify(user);
    this.http.post(this.config.registerUrl, body, { headers: this.config.contentHeaders })
      .subscribe(
      response => {
        localStorage.setItem(this.jwtKey , response.json().id_token);
        this.router.navigateByUrl('/');
      },
      error => this.handleError
      );
  }

  login(userName, password) {
    let data = {"password": password};
    let tableItem = new TableItem('usersAuth', userName, '', data );
    let body = JSON.stringify(tableItem);
    this.http.post(this.config.loginUrl, body, { headers: this.config.contentHeaders })
      .subscribe(
      response => {
        localStorage.setItem(this.jwtKey , response.json().id_token);
        this.router.navigateByUrl('/');
      },
      error => this.handleError
      );
  }

   logout() {
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('/login');
  }

  //Error logging 
    log(error) {
      if(this.config.enableLogging){
        var date = new Date();
        var partitionKey = date.getDate() + "-" + (date.getMonth() + 1) + "-"  + date.getFullYear();
        var rowKey = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        let body = {
          "tableName": "errorLogs",
            "partitionKey": partitionKey.toString(),
            "rowKey": rowKey.toString(),
            "data":{
                "error": JSON.stringify(error.message)
                }
          }

        this.http.post(this.config.logUrl, body, { headers: this.config.contentHeaders })
          .subscribe(
          response => {
            
          },
          error => this.handleError
          );
      }
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

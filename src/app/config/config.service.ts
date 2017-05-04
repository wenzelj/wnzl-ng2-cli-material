import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class ConfigService {
    private _config: Object;
    private _env: Object;
    apiUrl: string;
    protectedApiUrl : string;
    analyticsUrl: string;
    advertUrl: string;
    protectedAdvertUrl: string;
    loginUrl: string;
    logUrl:string;
    registerUrl:string;
    contentHeaders: Headers;
    enableLogging : boolean;

    constructor() {
      this.apiUrl = 'http://localhost:3001/api/';
      this.protectedApiUrl = this.apiUrl + 'protected/';
      this.logUrl = this.apiUrl + 'log/';

      this.advertUrl = this.apiUrl + 'advert/';
      this.analyticsUrl = this.apiUrl + 'analytics/';
      this.protectedAdvertUrl = this.apiUrl + 'protected/advert/';
      this.loginUrl = this.apiUrl + 'sessions/create';
      this.registerUrl = this.apiUrl + 'register' 
      this.contentHeaders = new Headers();
      this.contentHeaders.append('Accept', 'application/json');
      this.contentHeaders.append('Content-Type', 'application/json');
      this.enableLogging = true;
    }

}

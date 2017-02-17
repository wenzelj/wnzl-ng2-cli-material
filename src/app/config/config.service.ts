import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class ConfigService {
    private _config: Object;
    private _env: Object;
    apiUrl: string;
    analyticsUrl: string;
    advertUrl: string;
    protectedAdvertUrl: string;
    loginUrl: string;
    contentHeaders: Headers;

    constructor() {
      this.apiUrl = 'http://ckgapi.azurewebsites.net/api/';
      this.advertUrl = this.apiUrl + 'advert/';
      this.analyticsUrl = this.apiUrl + 'analytics/';
      this.protectedAdvertUrl = this.apiUrl + 'protected/advert/';
      this.loginUrl = 'http://ckgapi.azurewebsites.net/sessions/create';
      this.contentHeaders = new Headers();
      this.contentHeaders.append('Accept', 'application/json');
      this.contentHeaders.append('Content-Type', 'application/json');
    }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import 'hammerjs';

// PAGES
import { AppComponent } from './app.component';
import {Home} from './home/home';
import {Page1Component} from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
// SERVICES
import {DataService} from './data/data.service';
import {ConfigService} from './config/config.service';


@NgModule({
  declarations: [
    AppComponent,
    Home,
    Page1Component,
    Page2Component,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers   : [ DataService, ConfigService,
   {
    provide: LocationStrategy,
    useClass: HashLocationStrategy}, {	provide: 'windowObject', useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _appRef: ApplicationRef) {
    }

    ngDoBootstrap() {
        this._appRef.bootstrap(AppComponent);
    }
 }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { HttpModule } from '@angular/http';
import { Http, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AuthHttp, tokenNotExpired, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';
import 'hammerjs';

// SERVICES
import { DataService } from './data/data.service';
import { ConfigService } from './config/config.service';
import { AuthgaurdService } from './authgaurd/authgaurd.service';
import { AuthService } from './auth/auth.service';
// PAGES
import { AppComponent } from './app.component';
import { Home } from './home/home';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Page1Component,
    Page2Component,
    LoginComponent,
    LogoutComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [DataService,
    ConfigService,
    AuthgaurdService,
    AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }, { provide: 'windowObject', useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _appRef: ApplicationRef) {
  }

  ngDoBootstrap() {
    this._appRef.bootstrap(AppComponent);
  }
}

import {Routes} from '@angular/router';
import {AuthgaurdService} from './authgaurd/authgaurd.service';

import {Home} from './home/home';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home },
  {path: 'page1', component: Page1Component, canActivate: [AuthgaurdService]},
  {path: 'page2', component: Page2Component, canActivate: [AuthgaurdService]},
  { path: 'unauthorized', component: UnauthorizedComponent }

];


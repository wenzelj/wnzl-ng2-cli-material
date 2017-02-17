import {Routes} from '@angular/router';

import {Home} from './home/home';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home },
  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component}

];


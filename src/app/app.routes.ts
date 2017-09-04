import { Route } from "@angular/router";
import {
  HomeComponent,
} from './home.component';

import {
  LoginComponent,
} from './login.component';

import {
  TrayectoryComponent,
} from './trayectory.component';

const routes: Route[] = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
	{ path: 'path', component: TrayectoryComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'}
];

export default routes;

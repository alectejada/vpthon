import { Route } from "@angular/router";
import {
  HomeComponent,
} from './home.component';

import {
  LoginComponent,
} from './login.component';

const routes: Route[] = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'}
];

export default routes;

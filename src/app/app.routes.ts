import { Route } from "@angular/router";
import {
  HomeComponent,
} from './home.component';

import {
  LoginComponent,
} from './login.component';

import {
  CoursesComponent,
} from './courses.component';

const routes: Route[] = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'courses', component: CoursesComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'}
];

export default routes;

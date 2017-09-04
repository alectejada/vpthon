import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home.component';
import { LoginComponent }  from './login.component';
import {
  CoursesComponent,
} from './courses.component';

import AppRoutes from './app.routes';

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(AppRoutes)  ],
  declarations: [ AppComponent, HomeComponent, LoginComponent , CoursesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

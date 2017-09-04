import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Route } from "@angular/router";

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home.component';
import AppRoutes from './app.routes';

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(AppRoutes)  ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

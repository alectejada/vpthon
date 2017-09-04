import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Start Bootstrap</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a [routerLink]="['/home']" class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a  [routerLink]="['/path']" class="nav-link" href="#">Paths</a>
            </li>
            <li class="nav-item">
              <a [routerLink]="['/cursos']" class="nav-link" href="#">Cursos</a>
            </li>
            <li class="nav-item">
              <a [routerLink]="['/login']" class="nav-link" href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
     <!-- Page Content -->
    <div class="container content-wrapper">
      <router-outlet></router-outlet>
      <!-- Portfolio Item Heading -->
    </div>
  `,
})
export class AppComponent  { name = 'Angular'; }

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-default bg-default fixed-top">
      <div class="container">
        <a [routerLink]="['/home']" class="" href="#">
          <img style="max-height:80px" src="./images/logo.png" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
			<li class="nav-item active">
              <a  [routerLink]="['/charlas']" class="nav-link" href="#"><img style="max-height:60px" src="./images/charlas.png" alt="Charlas"></a>
            </li>
            <li class="nav-item">
              <a  [routerLink]="['/path']" class="nav-link" href="#"><img style="max-height:60px" src="./images/trayectoria.png" alt="Paths"></a>
            </li>
            <li class="nav-item">
              <a [routerLink]="['/courses']" class="nav-link" href="#"><img style="max-height:60px" src="./images/cursos.png" alt="Cursos"></a>
            </li>
            <li class="nav-item">
              <a [routerLink]="['/login']" class="nav-link" href="#"><img style="max-height:60px" src="./images/acceder.png" alt="Login"></a>
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
export class AppComponent  {  }

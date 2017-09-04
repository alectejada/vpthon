import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-default bg-default fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#"><img style="max-height:50px" src="./images/logo.PNG"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
			<li class="nav-item active">
              <a  [routerLink]="['/charlass']" class="nav-link" href="#"><img style="max-height:50px" src="./images/charlas.png" alt="charlas"></a>
            </li>
            <li class="nav-item">
              <a  [routerLink]="['/path']" class="nav-link" href="#"><img style="max-height:50px" src="./images/trayectoria.png" alt="Paths"></a>
            </li>
            <li class="nav-item">
              <a [routerLink]="['/cursos']" class="nav-link" href="#"><img style="max-height:50px" src="./images/cursos.png" alt="Cursos"></a>
            </li>
            <li class="nav-item">
              <a [routerLink]="['/login']" class="nav-link" href="#"><img style="max-height:50px" src="./images/acceder.png" alt="login"></a>
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

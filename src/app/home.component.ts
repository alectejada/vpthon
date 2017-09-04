import { Component } from '@angular/core';

@Component({
  selector: 'home-component',
  template: `<div>
  <h1 class="my-4 text-center">Venkante - Solución de Capacitación
      </h1>

      <!-- Portfolio Item Row -->
      <div class="row">
		<div class="col-md-2"></div>
	  
        <div class="col-md-8">
          <img class="img-fluid" src="./images/front1.jpg" alt="">
        </div>
		
		<div class="col-md-2"></div>
      </div>
      <!-- /.row -->

      <!-- Related Projects Row -->
      <h3 class="my-4">Related Projects</h3>

      <div class="row">

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
        </div>

      </div>
      <!-- /.row -->
      </div>
  `
})
export class HomeComponent {

}

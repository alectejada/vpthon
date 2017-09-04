import { Component } from '@angular/core';

@Component({
  selector: 'trayectory-component',
  template: `<div>
  <h1 class="my-5 text-center">Venkante - Solución de Capacitación
      </h1>

      <!-- Portfolio Item Row -->
      <div class="row">
		<div class="col-md-4"><img class=".img-responsive" style="max-width:400px" src="./images/frontend.png" alt="Front End Developer"></div>
		<div class="col-md-4"><img class=".img-responsive" style="max-width:400px" src="./images/backend.png" alt="Back End Developer"></div>		
		<div class="col-md-4"><img class=".img-responsive" style="max-width:400px" src="./images/Quality-Assurance.jpg" alt=" QA Developer"></div>
      </div>
	        <div class="row">
		<div class="col-md-4">SDET</div>
      </div>
      <!-- /.row -->
  `
})
export class TrayectoryComponent {

}

import { Component } from '@angular/core';

@Component({
  selector: 'trayectory-component',
  template: `<div>
  <h1 class="my-5 text-center">Venkante - Solución de Capacitación
      </h1>

      <!-- Portfolio Item Row -->
      <div class="row">
	    <div class="col-md-4 col-sm-6 mb-4">
          <div class="lms-course-box lms-course">
            <a href="#">
              <div class="lms-course-box lms-course-title">
                <img class=".img-responsive" style="max-height:100px" src="./images/frontend.png" alt="Front End Developer">
                <div class="lms-course-description">
                  Front End Developer
                </div>
              </div>
              <div class="lms-course-author">
                Pedro Perez
            </div>
            </a>
          </div>
        </div>
		<div class="col-md-4 col-sm-6 mb-4">
          <div class="lms-course-box lms-course">
            <a href="#">
              <div class="lms-course-box lms-course-title">
                <img class=".img-responsive" style="max-height:100px" src="./images/backend.png" alt="Back End Developer">
                <div class="lms-course-description">
                  Back End Developer
                </div>
              </div>
              <div class="lms-course-author">
                Pedro Perez
            </div>
            </a>
          </div>
        </div>
		<!--
		<div class="col-md-4"><img class=".img-responsive" style="max-width:400px" src="./images/frontend.png" alt="Front End Developer"></div>
		<div class="col-md-4"><img class=".img-responsive" style="max-width:400px" src="./images/backend.png" alt="Back End Developer"></div>		
		<div class="col-md-4"><img class=".img-responsive" style="max-width:400px" src="./images/Quality-Assurance.jpg" alt=" QA Developer"></div>
		-->
      </div>

      <!-- /.row -->
  `
})
export class TrayectoryComponent {

}

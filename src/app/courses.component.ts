import { Component } from '@angular/core';

@Component({
  selector: 'courses-component',
  template: `<div class='lms-component'>
     <div class="row">

        <div class="col-md-3 col-sm-6 mb-4">
          <div class="lms-course-box lms-course">
            <a href="#">
              <div class="lms-course-box lms-course-title">
                Object oriented Fundamentals
                <div class="lms-course-description">
                  blah blah del curso
                </div>
              </div>
              <div class="lms-course-author">
                Pedro Perez
            </div>
            </a>
          </div>
        </div>

         <div class="col-md-3 col-sm-6 mb-4">
          <div class="lms-course-box lms-course">
            <a href="#">
              <div class="lms-course-box lms-course-title">
                Angular Fundamentals
                <div class="lms-course-description">
                  blah blah del curso
                </div>
              </div>
              <div class="lms-course-author">
                Javier Gonzales
            </div>
            </a>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <div class="lms-course-box lms-course">
            <a href="#">
              <div class="lms-course-box lms-course-title">
                 C++ Fundamentals
                <div class="lms-course-description">
                  blah blah del curso
                </div>
              </div>
              <div class="lms-course-author">
                Pedro Perez
            </div>
            </a>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <div class="lms-course-box lms-course">
            <a href="#">
              <div class="lms-course-box lms-course-title">
                Spring Boot 2
                <div class="lms-course-description">
                  blah blah del curso
                </div>
              </div>
              <div class="lms-course-author">
                Fernando Mora
            </div>
            </a>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <div class="lms-course-box lms-course">
            <a href="#">
              <div class="lms-course-box lms-course-title">
                Azure Application Services
                <div class="lms-course-description">
                  blah blah del curso
                </div>
              </div>
              <div class="lms-course-author">
                Angel Suarez
            </div>
            </a>
          </div>
        </div>

         <div class="col-md-3 col-sm-6 mb-4">
          <div class="lms-course-box lms-course">
            <a href="#">
              <div class="lms-course-box lms-course-title">
                JavaScript Best Practices
                <div class="lms-course-description">
                  blah blah del curso
                </div>
              </div>
              <div class="lms-course-author">
                Igor Evanescen
            </div>
            </a>
          </div>
        </div>

      </div>
      <!-- /.row -->
    <div>
  `
})
export class CoursesComponent {

}

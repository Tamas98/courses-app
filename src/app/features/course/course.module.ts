import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './course.routing';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
  declarations: [
    CourseFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    routing
  ],
})
export class CourseModule { }

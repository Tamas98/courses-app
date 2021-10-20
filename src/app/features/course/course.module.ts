import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { CourseFormComponent } from './course-form/course-form.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesModule } from '../courses/courses.module';

@NgModule({
  declarations: [
    CourseFormComponent,
    EditCourseComponent,
    CreateCourseComponent,
    CourseDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
})
export class CourseModule { }

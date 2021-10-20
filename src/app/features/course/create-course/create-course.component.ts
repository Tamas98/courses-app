import { Component, OnInit } from '@angular/core';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { Course } from 'src/app/services/courses.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  constructor(private coursesStore: CoursesStoreService) { }

  ngOnInit(): void {
  }

  sendCreateRequest(course: Course) {
    this.coursesStore.createCourse(course)
  }
}

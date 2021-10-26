import { Component, OnInit } from '@angular/core';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { Course } from 'src/app/services/courses.service';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';
import { COURSES } from 'src/assets/mock';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];

  constructor(private courseStore: CoursesStoreService, private coursesStoreFacade: CoursesStateFacade) {
    this.coursesStoreFacade.getAllCourses()
    this.coursesStoreFacade.allCourses$.subscribe(
      (courses: Course[]) =>  {
        this.courses = courses
      }
    )
  }

  ngOnInit(): void {
  }

}

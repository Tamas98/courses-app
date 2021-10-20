import { Component, OnInit } from '@angular/core';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { Course } from 'src/app/services/courses.service';
import { COURSES } from 'src/assets/mock';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];

  constructor(private courseStore: CoursesStoreService) {
  }

  ngOnInit(): void {
    this.courseStore.getAll().subscribe();
    this.courseStore.courses$.subscribe(
      (courses: Course[]) =>  {
        this.courses = courses
      }
    );
  }

}

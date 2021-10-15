import { Component, OnInit } from '@angular/core';
import { CoursesStoreService } from 'src/app/services/courses-services/courses-store.service';
import { COURSES } from 'src/assets/mock';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: any[];

  constructor(private courseStore: CoursesStoreService) {
    this.courses = courseStore.getAll();
  }

  ngOnInit(): void {
  }

}

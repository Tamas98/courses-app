import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { Course } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  public course?: Course;

  constructor(private coursesStore: CoursesStoreService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.coursesStore.get(params['id']).subscribe(
          (course: Course) => {
            this.course = course
          }
      )
    });
  }

}

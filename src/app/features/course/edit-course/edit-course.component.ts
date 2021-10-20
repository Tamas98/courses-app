import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { Course } from 'src/app/services/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  private id: string = "";

  private course$$ = new BehaviorSubject<Course | undefined>(undefined);
  public course$: Observable<Course | undefined> = this.course$$.asObservable();

  constructor(private coursesStore: CoursesStoreService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.coursesStore.get(params['id']).subscribe(
          (course: Course) => {
            this.course$$.next(course)
          }
      )
    });
  }

  ngOnInit(): void {
  }

  sendEditRequest(course: Course) {
    this.coursesStore.editCourse(course, this.id)
  }
}

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { Course, CourseResponse, CoursesService } from "src/app/services/courses.service";
import { requestAllCourses, requestAllCoursesFail, requestAllCoursesSuccess, requestSingleCourse, requestSingleCourseFail, requestSingleCourseSuccess } from "./courses.actions";

@Injectable()
export class CoursesEffects {
  getAll$ = createEffect(() => {
    return this.actions.pipe(
      ofType(requestAllCourses),
      switchMap(() =>
        this.courses.getAll().pipe(
          map((courses: CourseResponse) => {
            debugger
            return requestAllCoursesSuccess({courses:courses.result})
          }),
          catchError((error) => of(requestAllCoursesFail))
        )
      )
    );
  });

  getSpecificCourse$ = createEffect(() => {
    return this.actions.pipe(
      ofType(requestSingleCourse),
      switchMap((id: {id: string}) =>
        this.courses.getCourse(id.id).pipe(
          map((course: CourseResponse) => requestSingleCourseSuccess({course: course.result[0]})),
          catchError((error) => of(requestSingleCourseFail))
        )
      )
    );
  });

  constructor(
    private actions: Actions,
    private courses: CoursesService
  ) {}
}

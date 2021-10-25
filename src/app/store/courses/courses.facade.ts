import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Course } from "src/app/services/courses.service";
import { requestAllCourses, requestCreateCourse, requestDeleteCourse, requestEditCourse, requestFilteredCourses, requestSingleCourse } from "./courses.actions";
import { CoursesState } from "./courses.reducer";

@Injectable()
export class UserStateFacade {
  public isAllCoursesLoading$: Observable<boolean> = this.store.pipe(select((state: CoursesState) => state.isAllCoursesLoading));
  public isSingleCoursesLoading$: Observable<boolean> = this.store.pipe(select((state: CoursesState) => state.isSingleCourseLoading));
  public isSearchState$: Observable<boolean> = this.store.pipe(select((state: CoursesState) => state.isSearchState));
  public allCourses$: Observable<Course[]> = this.store.pipe(select((state: CoursesState) => state.allCourses));
  public course$: Observable<Course | undefined> = this.store.pipe(select((state: CoursesState) => state.course));
  public errorMsg$: Observable<string> = this.store.pipe(select((state: CoursesState) => state.errorMsg));

  constructor(private store: Store<CoursesState>) {}

  getAllCourses() {
    this.store.dispatch(requestAllCourses());
  }

  getSingleCourse(id: string) {
    this.store.dispatch(requestSingleCourse({id: id}))
  }

  getFilteredCourses(searchValue: string) {
    this.store.dispatch(requestFilteredCourses({searchValue: searchValue}))
  }

  editCourse(body: Course, id: string) {
    this.store.dispatch(requestEditCourse({id: id, body: body}))
  }

  deleteCourse(id: string) {
    this.store.dispatch(requestDeleteCourse({id: id}))
  }

  createCourse(body: Course) {
    this.store.dispatch(requestCreateCourse({body: body}))
  }
}

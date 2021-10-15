import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, tap, map, switchMap } from 'rxjs/operators';
import { Course, CourseResponse, CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {

  private isLoading$$!: BehaviorSubject<boolean>;
  private courses$$!: BehaviorSubject<Course[]>;

  public isLoading$: Observable<boolean> = this.isLoading$$.asObservable();
  public courses$: Observable<Course[]> = this.courses$$.asObservable();

  private coursesCache: Course[] = [];

  //private courses!: CourseResponse[];

  constructor(private service: CoursesService) { }

  getAll(): Observable<Course[]> {
    this.isLoading$$.next(true);
    return this.service.getAll().pipe(
      tap((response: any) => {
        this.coursesCache = response.result
        this.courses$$.next(this.coursesCache)
      }),
      finalize(() => this.isLoading$$.next(false))
    )
  }

  get(id: string) : Observable<CourseResponse> {
    return this.service.getCourse(id).pipe(
      map((response: any) => response.result),
      finalize(() => this.isLoading$$.next(false))
    );
  }

  createCourse(course: Course) {
    this.isLoading$$.next(true);
    this.service.createCourse(course).pipe(
      switchMap(this.getAll),
      finalize(() => this.isLoading$$.next(false))
    );
  }

  editCourse(course: Course, id: string) {
    this.isLoading$$.next(true);
    this.service.editCourse(course, id).pipe(
      switchMap(this.getAll),
      finalize(() => this.isLoading$$.next(false))
    )
  }

  deleteCourse(id: string) {
    this.isLoading$$.next(true);
    this.service.deleteCourse(id).pipe(
      switchMap(this.getAll)
    );
  }

  searchCourses(filter: string) {
    const filteredResult =  this.coursesCache.filter((course: Course) => {
      return course.description.includes(filter) || course.title.includes(filter);
    })
    this.courses$$.next(filteredResult);
  }


}

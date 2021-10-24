import { createAction, props } from "@ngrx/store";
import { Course, CourseResponse } from "src/app/services/courses.service";

export const requestAllCourses = createAction('[Courses] Request all courses');
export const requestAllCoursesSuccess = createAction('[Courses] Request all courses success',props<{courses: Course[]}>());
export const requestAllCoursesFail = createAction('[Courses] Request all courses failed');

export const requestSingleCourse = createAction('[Courses] Request sindle course',props<{id: string}>());
export const requestSingleCourseSuccess = createAction('[Courses] Request single course success', props<{course: Course}>());
export const requestSingleCourseFail = createAction('[Courses] Request single course failed');

export const requestFilteredCourses = createAction('[Courses] Request filtered courses',props<{searchValue: string}>());
export const requestFilteredCoursesSuccess = createAction('[Courses] Request filtered courses success');
export const requestFilteredCoursesFail = createAction('[Courses] Request filtered courses failed');

export const requestEditCourse = createAction('[Courses] Request edit course',props<{id: string, body: Course}>());
export const requestEditCourseSuccess = createAction('[Courses] Request edit course success');
export const requestEditCourseFail = createAction('[Courses] Request edit course failed');

export const requestDeleteCourse = createAction('[Courses] Request delete course',props<{id: string}>());
export const requestDeleteCourseSuccess = createAction('[Courses] Request delete course success');
export const requestDeleteCourseFail = createAction('[Courses] Request delete course failed');

export const requestCreateCourse = createAction('[Courses] Request create course',props<{body: Course}>());
export const requestCreateCourseSuccess = createAction('[Courses] Request create course success');
export const requestCreateCourseFail = createAction('[Courses] Request create course failed');

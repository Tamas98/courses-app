import { CoursesState } from "./courses.reducer";

export const isAllCoursesLoadingSelector = (state: CoursesState) => state.isAllCoursesLoading;
export const isSindleCourseLoadingSelector = (state: CoursesState) => state.isSingleCourseLoading;
export const isSearchStateSelector = (state: CoursesState) => state.isSearchState;
export const getCourses = (state: CoursesState) => state.allCourses;
export const getCourse = (state: CoursesState) => state.course;
export const getErrorMsg = (state: CoursesState) => state.errorMsg;

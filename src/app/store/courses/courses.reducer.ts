import { Action, createReducer, on } from "@ngrx/store";
import { Course } from "src/app/services/courses.service";
import { requestAllCoursesSuccess, requestSingleCourseSuccess } from "./courses.actions";

export const coursesFeatureKey = 'coursesFeatureKey';

const initialState: CoursesState = {
  allCourses: [],
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMsg: ""
}

export interface CoursesState {
  allCourses: Course[],
  course?: Course,
  isAllCoursesLoading: boolean,
  isSingleCourseLoading: boolean,
  isSearchState: boolean,
  errorMsg: string
}

const privateCoursesReducer = createReducer(initialState,
    on(requestAllCoursesSuccess, (state,payload) => {
      return {
        ...state,
        allCourses: payload.courses
      };
    }),
    on(requestSingleCourseSuccess, (state,payload) => {
      state.course = payload.course
      return state;
    }),
  )

export const coursesReducer = (state:
  CoursesState | undefined, action: Action): CoursesState => privateCoursesReducer(state, action);

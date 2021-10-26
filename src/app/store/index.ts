import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../auth/store/auth.reducer";
import { userReducer, UserState } from "../user/store/user.reducer";
import { authorReducer, AuthorState } from "./authors/authors.reducer";
import { CoursesEffects } from "./courses/courses.effects";
import { coursesReducer, CoursesState } from "./courses/courses.reducer";
import { authReducer } from "../auth/store/auth.reducer";
import { UserEffects } from "../user/store/user.effects";

export interface State {
  courses: CoursesState,
  authors: AuthorState,
  users: UserState,
  auth: AuthState
}

export const reducers: ActionReducerMap<State> = {
  authors: authorReducer,
  courses: coursesReducer,
  users: userReducer,
  auth: authReducer,
};

export const effects = [CoursesEffects, UserEffects];

import { Action, createReducer, on } from "@ngrx/store";
import { requestCurrentUserSuccess } from "./user.actions";

export const currentUserFeatureKey = 'currentUserRequest';

const initialState: UserState = {
  isAdmin: false,
  name: ""
}

export interface UserState {
  isAdmin: boolean
  name: string
}

const currentUserReducer = createReducer(initialState,
    on(requestCurrentUserSuccess, state => ({ isAdmin: state.isAdmin, name: state.name })),
  )

export const userReducer = (state:
  UserState, action: Action): UserState => currentUserReducer(state, action);

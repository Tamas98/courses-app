import { createAction, props } from "@ngrx/store";

export const requestCurrentUser = createAction('[User] Request current user');
export const requestCurrentUserSuccess = createAction('[User] Request current user success', props<{ name: string; isAdmin: boolean }>());
export const requestCurrentUserFail = createAction('[User] Request current user failed');

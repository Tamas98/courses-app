import { createAction, props } from "@ngrx/store";

export const requestLogin = createAction('[Auth] Request login',props<{email: string; password: string; }>());
export const requestLoginSuccess = createAction('[Auth] Request login success',props<{token: string}>());
export const requestLoginFail = createAction('[Auth] Request login failed');
export const requestRegister = createAction('[Auth] Request register',props<{email: string; password: string; name?: string }>());
export const requestRegisterSuccess = createAction('[Auth] Request register success');
export const requestRegisterFail = createAction('[Auth] Request register failed');
export const requestLogout = createAction('[Auth] Request logout');
export const requestLogoutSuccess = createAction('[Auth] Request logout success');
export const requestLogoutFail = createAction('[Auth] Request logout failed');

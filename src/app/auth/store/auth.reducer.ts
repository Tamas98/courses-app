import { Action, createReducer, on } from "@ngrx/store";
import { requestLoginFail, requestLoginSuccess, requestLogoutFail, requestLogoutSuccess, requestRegisterFail, requestRegisterSuccess } from "./auth.actions";

export const authFeatureKey = 'authFeatureKey';

const initialState: AuthState = {
  isAuthorized: false,
  token: "",
  errorMsg: ""
}

export interface AuthState {
  isAuthorized: boolean
  token: string
  errorMsg?: string
}

const privateAuthReducer = createReducer(initialState,
    on(requestLoginSuccess, state => ({ isAuthorized: true, token: state.token })),
    on(requestRegisterSuccess, state => ({ isAuthorized: true, token: state.token })),
    on(requestLogoutSuccess, state => ({ isAuthorized: true, token: state.token })),
    on(requestLoginFail, state => ({ isAuthorized: state.isAuthorized, token: state.token, errorMsg: state.errorMsg })),
    on(requestRegisterFail, state => ({ isAuthorized: state.isAuthorized, token: state.token, errorMsg: state.errorMsg })),
    on(requestLogoutFail, state => ({ isAuthorized: state.isAuthorized, token: state.token , errorMsg: state.errorMsg })),
  )

export const autReducer = (state:
  AuthState, action: Action): AuthState => privateAuthReducer(state, action);

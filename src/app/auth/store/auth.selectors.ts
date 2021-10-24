import { AuthState } from "./auth.reducer";

export const isAuthorized = (state: AuthState) => state.isAuthorized;
export const getToken = (state: AuthState) => state.token;
export const getSpecificErrorMsg = (state: AuthState) => state.errorMsg;


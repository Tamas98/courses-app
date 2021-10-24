import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Auth } from "../services/auth.service";
import { SessionStorageService } from "../services/session-storage.service";
import { requestLogin, requestLoginSuccess, requestLogout, requestLogoutSuccess, requestRegister } from "./auth.actions";
import { AuthState } from "./auth.reducer";

@Injectable()
export class AuthStateFacade {
  public getToken$: Observable<string> = this.store.pipe(select((auth: AuthState) => auth.token));
  public isAuthorized$: Observable<boolean> = this.store.pipe(select((auth: AuthState) => auth.isAuthorized));
  public getLoginErrorMsg$: Observable<string | undefined> = this.store.pipe(select((auth: AuthState) => auth.errorMsg));
  public getRegisterErrorMsg$: Observable<string | undefined> = this.store.pipe(select((auth: AuthState) => auth.errorMsg));

  constructor(private store: Store<AuthState>, private storage: SessionStorageService) {}

  login(body: Auth) {
    this.store.dispatch(requestLogin(body))
  }

  register(body: Auth) {
    this.store.dispatch(requestRegister(body))
  }

  logout() {
    this.store.dispatch(requestLogout());
  }

  closeSession() {
    this.store.dispatch(requestLogoutSuccess());
  }

  setAuthoritazion() {
    this.store.dispatch(requestLoginSuccess({token: this.storage.getToken('token')}))
  }
}

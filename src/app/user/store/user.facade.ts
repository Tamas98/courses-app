import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { UserService } from "../services/user.service";
import { requestCurrentUser } from "./user.actions";
import { UserState } from "./user.reducer";

@Injectable()
export class UserStateFacade {
  public name$: Observable<string> = this.store.pipe(select((user: UserState) => user.name));
  public isAdmin$: Observable<boolean> = this.store.pipe(select((user: UserState) => user.isAdmin));

  constructor(private store: Store<UserState>) {}

  getCurrentUser(): void {
    this.store.dispatch(requestCurrentUser());
  }
}

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { UserService } from "../services/user.service";
import { requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess } from "./user.actions";
import { userReducer, UserState } from "./user.reducer";

@Injectable()
export class UserEffects {
  getCurrentUser$ = createEffect(() => {
    return this.actions.pipe(
      ofType(requestCurrentUser),
      switchMap(() =>
        this.userService.getUser().pipe(
          map((user: UserState) => requestCurrentUserSuccess(user)),
          catchError((error) => of(requestCurrentUserFail))
        )
      )
    );
  });

  constructor(
    // inject Actions from @ngrx/effects
    private actions: Actions,
    private userService: UserService
  ) {}
}

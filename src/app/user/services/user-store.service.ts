import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserPriv, UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  isAdmin$$ = new BehaviorSubject<boolean>(false);
  isAdmin$: Observable<boolean> = this.isAdmin$$.asObservable();

  constructor(private service: UserService) { }

  getUser() {
    this.service.getUser().subscribe(
      (userPriv: UserPriv) => this.isAdmin$$.next(userPriv.isAdmin)
    );
  }
}

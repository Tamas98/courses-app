import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  isAdmin$$ = new BehaviorSubject<boolean>(false);
  isAdmin$: Observable<boolean> = this.isAdmin$$.asObservable();

  constructor(private service: UserService) { }

  getUser() {
    this.service.getUser().subscribe(
      (user: User) => this.isAdmin$$.next(user.isAdmin)
    );
  }
}

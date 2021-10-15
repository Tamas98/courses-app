import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  isAdmin$$!: BehaviorSubject<boolean>;
  isAdmin$: Observable<boolean> = this.isAdmin$$.asObservable();

  constructor() { }

  getUser() {

  }
}

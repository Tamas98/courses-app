import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
      return this.http.get<User>('http://localhost:3000/users/me');
  }
}

export interface User {
  isAdmin: boolean
  name: string
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<UserPriv> {
      return this.http.get<UserPriv>('http://localhost:3000/users/me');
  }
}

export interface UserPriv {
  isAdmin: boolean
  name: string
}

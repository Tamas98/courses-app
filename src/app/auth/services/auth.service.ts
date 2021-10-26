import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoading$$ = new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean> = this.isLoading$$.asObservable();

  constructor(private router: Router,private http: HttpClient, private storage: SessionStorageService) { }

  login(user: Auth): void {
    this.isLoading$$.next(true);
    this.http.post('http://localhost:3000/login', user).pipe(
      finalize(() => this.isLoading$$.next(false))
    ).subscribe(
      (response: any) => {
        if(response.successful) {
          this.storage.setToken('token', response.result)
          this.router.navigate(['/courses'])
        }
      });
  }

  logout(): void {
    this.isLoading$$.next(true);
    this.http.delete('http://localhost:3000/logout', {headers: {Authorization: this.storage.getToken('token')}}).pipe(
      tap((response: any) => this.storage.deleteToken('token')),
      finalize(() => this.isLoading$$.next(false))
    ).subscribe(
      (response: any) => {
          this.storage.deleteToken('token')
          this.router.navigate(['/login'])
      });
  }

  register(user: Auth): void {
    this.isLoading$$.next(true);
    this.http.post('http://localhost:3000/register', user).pipe(
      tap((response: any) => console.log(user,response)),
      finalize(() => this.isLoading$$.next(false))
    ).subscribe(
      (response: any) => {
        if(response.successful) {
          this.router.navigate(['/login'])
        }
      });
  }
}

export interface Auth {
  name?: string
  email: string
  password: string
}

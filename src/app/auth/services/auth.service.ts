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

  private isLoading$$!: BehaviorSubject<boolean>;
  public isLoading$: Observable<boolean> = this.isLoading$$.asObservable();

  constructor(private router: Router,private http: HttpClient, private storage: SessionStorageService) { }

  login(user: User): void {
    this.isLoading$$.next(true);
    this.http.post('http://localhost:3000/api/login', user).pipe(
      tap((response: any) => this.storage.setToken('token', response.result)),
      finalize(() => this.isLoading$$.next(false))
    );
  }

  logout(): void {
    this.isLoading$$.next(true);
    this.http.post('http://localhost:3000/api/login', this.storage.getToken('authToken')).pipe(
      tap((response: any) => this.storage.deleteToken('token')),
      finalize(() => this.isLoading$$.next(false))
    );
  }

  register(user: User): void {
    this.isLoading$$.next(true);
    this.http.post('http://localhost:3000/api/register', user).pipe(
      tap((response: any) => this.router.navigate(['/login'])),
      finalize(() => this.isLoading$$.next(false))
    );
  }
}

interface User {
  name?: string
  email: string
  password: string
}

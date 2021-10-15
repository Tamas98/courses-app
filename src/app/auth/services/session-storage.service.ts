import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private key: string;

  constructor(@Inject('Window') private window: Window) {
    this.key = 'authToken';
  }

  setToken(key: string, token: string): void {
    this.window.sessionStorage.setItem(key, token);
  }

  getToken(key: string): string {
    return this.window.sessionStorage.getItem(key)!;
  }

  deleteToken(key: string): void {
    this.window.sessionStorage.removeItem(key);
  }
}

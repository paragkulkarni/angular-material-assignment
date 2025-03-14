import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLoggedIn: boolean = false;
  role: string = '';
  constructor() {}

  login(userData: any) {
    console.log(userData);
    if (
      userData.username == 'user@gmail.com' &&
      userData.password == 'password'
    ) {
      this.isUserLoggedIn = true;
      this.role = 'user';
      localStorage.setItem('isUserLoggedIn', 'true');
      localStorage.setItem('role', this.role);
    } else if (
      userData.username == 'admin@gmail.com' &&
      userData.password == 'password'
    ) {
      this.isUserLoggedIn = true;
      this.role = 'admin';
      localStorage.setItem('isUserLoggedIn', 'true');
      localStorage.setItem('role', this.role);
    } else {
      this.isUserLoggedIn = false;
      this.role = '';
    }
    return {
      isUserLoggedIn: this.isUserLoggedIn,
      role: this.role,
    };
  }

  logout() {
    this.isUserLoggedIn = false;
    localStorage.clear();
  }
}

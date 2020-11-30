import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

export interface User {
    email: string;
    password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private router: Router) {}

  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
              if (localStorage.getItem('email') && localStorage.getItem('password')) {
                  this.loggedIn = true;
                  resolve(this.loggedIn);
              }
          });
      }
    );
    return promise;
  }

  login(loginData: User): Observable<boolean> {
      debugger
    if (loginData.email === 'admin@admin.com' && loginData.password === 'admin') {
        localStorage.setItem('email', loginData.email);
        localStorage.setItem('password', loginData.password);

        return of(true);
    } else {
        return of(false);
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}

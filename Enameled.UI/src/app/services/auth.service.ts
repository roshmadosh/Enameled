import { EventEmitter, Injectable } from "@angular/core";
import { ErrorService } from "./error.service";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from "@angular/router";

export interface User {
  id: string;
  username: string;
  token: string;
}

@Injectable()
export class AuthService {
  loginFailed = new EventEmitter<boolean>();
  loggedIn: boolean = false;
  fetchedUser: User | undefined;


  constructor(private errorService: ErrorService,
              private router: Router,
              private http: HttpClient) {
  }


  isLoggedIn(): Promise<boolean> {
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    return Promise.resolve(this.loggedIn);
  }
  login(user: { username: string, password: string }) {
    // if (username === 'admin' && password === 'password') {
    //   localStorage.setItem('token', username);
    // } else {
    //   this.errorService.enableError('Invalid credentials.');
    // }
    this.http.post<User>('http://localhost:4000/users/authenticate', { username: user.username, password: user.password })
          .subscribe({
            next: data => {
              localStorage.setItem('token', data.id);
            },
            error: error => {
              this.errorService.enableError('Invalid credentials.');
              console.error(error.message)
            },
            complete: () => {
              console.log('User found'); 
              this.router.navigate(['/dashboard']);
            }
          })
  }
  logout() {
    localStorage.removeItem('token');
  }
}
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
  expires: string;
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
    const expiresAt: string = localStorage.getItem('em_expires') ?? '';
    if (localStorage.getItem('em_token') && Date.parse(expiresAt) > Date.now()) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    return Promise.resolve(this.loggedIn);
  }
  login(user: { username: string, password: string }) {
    this.http.post<User>('http://localhost:4000/users/authenticate', { username: user.username, password: user.password })
          .subscribe({
            next: data => {
              localStorage.setItem('em_token', data.token);
              localStorage.setItem('em_expires', data.expires);
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
    localStorage.removeItem('em_token');
    localStorage.removeItem('em_expires');
  }
}
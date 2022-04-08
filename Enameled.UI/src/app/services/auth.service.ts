import { EventEmitter, Injectable } from "@angular/core";
import { ErrorService } from "./error.service";

@Injectable()
export class AuthService {
  loginFailed = new EventEmitter<boolean>();
  loggedIn: boolean = false;

  constructor(private errorService: ErrorService) {

  }

  isLoggedIn(): Promise<boolean> {
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    return Promise.resolve(this.loggedIn);
  }
  login(username: string, password: string): void {
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('token', username);
    } else {
      this.errorService.enableError('Invalid credentials.');
    }
  }
  logout() {
    localStorage.removeItem('token');
  }
}
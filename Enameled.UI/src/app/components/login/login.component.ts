import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  @ViewChild('username') usernameInput: ElementRef | undefined;
  @ViewChild('password') passwordInput: ElementRef | undefined;
  fetchedUser: User | undefined;
  constructor(private router: Router, 
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }


  onLoginClick(username: string, password: string) {
    this.authService.logout();
    this.authService.login({ username, password });
  }

  onLogoutClick() {
    this.authService.logout();
  }

  focusUsername() {
    this.usernameInput?.nativeElement.focus();
  }
  focusPassword() {
    this.passwordInput?.nativeElement.focus();
  }
}

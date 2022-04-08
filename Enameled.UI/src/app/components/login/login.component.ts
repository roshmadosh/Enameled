import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, 
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }


  onLoginClick(username: string, password: string) {
    this.authService.logout();
    this.authService.login(username, password);
    this.router.navigate(['dashboard']);
  }

  onLogoutClick() {
    this.authService.logout();
  }
}

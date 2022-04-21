import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService
            ) { }

  ngOnInit(): void {
  }

  onSignOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

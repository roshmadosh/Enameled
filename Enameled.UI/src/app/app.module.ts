import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ErrorService } from './services/error.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { CategoriesService } from './services/categories.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ErrorComponent,
    NavbarComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path:'login',
        component: LoginComponent,
      },
      {
        path:'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent,
      },
      {
        path: 'search',
        canActivate: [AuthGuard],
        component: SearchComponent,
      }
    ])
  ],
  providers: [
    AuthService, 
    AuthGuard, 
    ErrorService,
    CategoriesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

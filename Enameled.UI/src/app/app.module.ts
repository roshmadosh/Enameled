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
import { LoginGuard } from './guards/login.guard';
import { RecipeComponent } from './components/recipe/recipe.component';
import { HoverClassDirective } from './directives/hover-class.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ErrorComponent,
    NavbarComponent,
    SearchComponent,
    RecipeComponent,
    HoverClassDirective,
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
        canActivate:[LoginGuard],
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
    LoginGuard, 
    ErrorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

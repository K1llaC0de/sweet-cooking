import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: 'home', component: WelcomeComponent },  // Home Page
    { path: 'login', component: LoginComponent }, // Login Page
    { path: 'signup', component: SignupComponent } // Signup Page
];

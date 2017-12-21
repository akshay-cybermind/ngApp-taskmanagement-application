import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {authRoutes} from './auth.routes';
import {  ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, authRoutes
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }

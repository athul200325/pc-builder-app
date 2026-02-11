import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { UserService } from '../../services/user.service';
import { switchMap } from 'rxjs';
import { TokenService } from '../../services/token.service';


@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, ButtonModule, InputTextModule, PasswordModule, CheckboxModule, CardModule, DividerModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toast: ToastService,
    private router: Router,
    private userService: UserService,
    private tokenService: TokenService

  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  login() {
    console.log('Login button clicked');
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      if (email && password) {
        this.authService.login(email, password).pipe(
          switchMap((res: any) => {
            if (res.token) {
              this.tokenService.setToken(res.token);
              localStorage.setItem('userId', res.userId);
              return this.userService.getUserById(res.userId);
            }
            throw new Error('No token received');
          })
        ).subscribe({
          next: (userData) => {
            this.userService.setUser(userData.data);
            this.toast.showToast('Login successful');
            this.router.navigate(['/']);
          },
          error: (error) => {
            this.toast.showError('Login failed. Please check your credentials and try again.');
          }
        });
      }
    }
  }
}

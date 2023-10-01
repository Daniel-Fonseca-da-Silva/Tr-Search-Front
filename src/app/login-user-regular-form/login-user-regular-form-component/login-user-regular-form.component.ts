import { Component } from '@angular/core';
import { LoginUserRegularFormService } from './login-user-regular-form.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user-regular-form',
  templateUrl: './login-user-regular-form.component.html',
  styleUrls: ['./login-user-regular-form.component.css'],
})
export class LoginUserRegularFormComponent {
  constructor(
    private loginService: LoginUserRegularFormService, private fb: FormBuilder
  ) {}

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public onSubmitRegularUser(): void {
    this.loginService.loginRegularUser(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value);
  }
}

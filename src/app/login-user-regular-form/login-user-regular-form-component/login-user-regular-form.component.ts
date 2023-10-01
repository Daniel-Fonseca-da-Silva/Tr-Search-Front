import { Component } from '@angular/core';
import { LoginUserRegularFormService } from './login-user-regular-form.service';

@Component({
  selector: 'app-login-user-regular-form',
  templateUrl: './login-user-regular-form.component.html',
  styleUrls: ['./login-user-regular-form.component.css'],
})
export class LoginUserRegularFormComponent {
  constructor(
    private loginService: LoginUserRegularFormService
  ) {}

  email: string = '';
  password: string = '';

  public onSubmitRegularUser(): void {
    const { email, password } = this;
    this.loginService.loginRegularUser(email, password);
  }
}

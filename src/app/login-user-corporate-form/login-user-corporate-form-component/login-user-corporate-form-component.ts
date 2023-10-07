import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { LoginUserCorporateFormService } from './login-user-corporate-form.service';

@Component({
  selector: 'app-login-user-corporate-form-component',
  templateUrl: './login-user-corporate-form-component.html',
  styleUrls: ['./login-user-corporate-form-component.css']
})
export class LoginUserCorporateFormComponent {
  loginForm!: FormGroup;
  faHouseUser = faHouseUser;

  constructor(
    private loginService: LoginUserCorporateFormService, private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public onSubmitCorporateUser(): void {
    this.loginService.loginCorporateUser(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value);
  }
}
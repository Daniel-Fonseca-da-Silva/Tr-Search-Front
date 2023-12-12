import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import { LoginUserRegularFormService } from './index';

@Component({
  selector: 'app-login-user-regular-form',
  templateUrl: './login-user-regular-form.component.html',
  styleUrls: ['./login-user-regular-form.component.css'],
})
export class LoginUserRegularFormComponent implements OnInit {
  loginForm!: FormGroup;
  faHouseUser = faHouseUser;

  constructor(
    private loginService: LoginUserRegularFormService,
    private fb: FormBuilder,
    private router: Router,
    private elementRef: ElementRef
  ) {}

  public ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public existError(): boolean {
    if (this.loginService.existError) {
      return true;
    } else {
      return false;
    }
  }

  public onSubmitRegularUser(): void {
    this.loginService.loginRegularUser(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value
    );
  }

  public routerCreateUser(): void {
    this.router.navigateByUrl('/create-regular-user');
    this.elementRef.nativeElement.remove();
  }

}

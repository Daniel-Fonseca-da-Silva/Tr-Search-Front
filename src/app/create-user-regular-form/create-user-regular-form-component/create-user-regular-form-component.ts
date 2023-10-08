import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CreateUserRegularFormService } from './index';
import { faTrashCan, faHouseUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-user-regular-form-component',
  templateUrl: './create-user-regular-form-component.html',
  styleUrls: ['./create-user-regular-form-component.css'],
})
export class CreateUserRegularFormComponent {

  createform!: FormGroup;
  faTrashCan = faTrashCan;
  faHouseUser = faHouseUser;

  constructor(
    private createService: CreateUserRegularFormService,
    private fb: FormBuilder,
    private router: Router,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.createform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      photo: ['', [Validators.required]],
      document: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]],
      conditions: ['', [Validators.required]]
    });
  }

  onSubmitCreateRegularUser(): void {
    console.log("Created");
    
    // this.loginService.loginRegularUser(
    //   this.createform.get('email')?.value,
    //   this.createform.get('password')?.value
    // );
  }

  public routerBack(): void {
    window.history.back();
  }

  public resetForm(): void {
    this.createform.reset();  
  }

}

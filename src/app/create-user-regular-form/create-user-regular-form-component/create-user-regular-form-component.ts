import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { faTrashCan, faHouseUser } from '@fortawesome/free-solid-svg-icons';

import { CreateUserRegularFormService } from './index';

@Component({
  selector: 'app-create-user-regular-form-component',
  templateUrl: './create-user-regular-form-component.html',
  styleUrls: ['./create-user-regular-form-component.css'],
})
export class CreateUserRegularFormComponent {

  createform!: FormGroup;
  faTrashCan = faTrashCan;
  faHouseUser = faHouseUser;
  passwordNotEqual = false;

  constructor(
    private fb: FormBuilder,
    private service: CreateUserRegularFormService,
  ) {}

  ngOnInit(): void {
    this.createform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      document: ['', [Validators.required]],
      photo: [''],
      birthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      conditions: ['', [Validators.required]]
    });
  }

  onSubmitCreateRegularUser(): void {
    if (this.createform.get('password')?.value != this.createform.get('confirm_password')?.value) {
      this.passwordNotEqual = true
      return;
    }

    this.service.createRegularUser(
      this.createform.get('name')?.value,
      this.createform.get('phone')?.value,
      this.createform.get('password')?.value,
      this.createform.get('email')?.value,
      this.createform.get('document')?.value,
      this.createform.get('photo')?.value,
      this.createform.get('birthday')?.value,
      this.createform.get('gender')?.value,
      );
  }

  public routerBack(): void {
    window.history.back();
  }

  public resetForm(): void {
    this.createform.reset();  
  }

}

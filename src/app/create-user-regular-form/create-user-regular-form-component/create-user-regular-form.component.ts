import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { faTrashCan, faHouseUser } from '@fortawesome/free-solid-svg-icons';

import { CreateUserRegularFormService } from './index';
import { StateService } from 'src/app/sharing';

@Component({
  selector: 'app-create-user-regular-form-component',
  templateUrl: './create-user-regular-form.component.html',
  styleUrls: ['./create-user-regular-form.component.css'],
})
export class CreateUserRegularFormComponent {

  createform!: FormGroup;
  faTrashCan = faTrashCan;
  faHouseUser = faHouseUser;
  passwordNotEqual = false;

  constructor(
    private fb: FormBuilder,
    private service: CreateUserRegularFormService,
    private stateService: StateService
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
      state: ['', [Validators.required]],
      conditions: ['', [Validators.required]],
      city: ['', [Validators.required]],
      number: ['', [Validators.required]],
      district: ['', [Validators.required]],
      street: ['', [Validators.required]],
      zipCode: ['', [Validators.required]]
    });
  }

  public get stateOptions(): any {
    return this.stateService.getStateOptions();
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
      this.createform.get('city')?.value,
      this.createform.get('number')?.value,
      this.createform.get('state')?.value,
      this.createform.get('district')?.value,
      this.createform.get('street')?.value,
      this.createform.get('zipCode')?.value,
      );
  }

  public routerBack(): void {
    window.history.back();
  }

  public resetForm(): void {
    this.createform.reset();
  }

}

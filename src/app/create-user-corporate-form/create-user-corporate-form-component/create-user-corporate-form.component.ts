import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateUserCorporateFormService } from './index';
import { faTrashCan, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { StateService } from '../../sharing/service/states-service.service';

@Component({
  selector: 'app-create-user-corporate-form',
  templateUrl: './create-user-corporate-form.component.html',
  styleUrls: ['./create-user-corporate-form.component.css']
})
export class CreateUserCorporateFormComponent {

  createform!: FormGroup;

  faTrashCan = faTrashCan;
  faHouseUser = faHouseUser;
  passwordNotEqual = false;

  constructor(private fb: FormBuilder, private service: CreateUserCorporateFormService, private stateService: StateService) {}

  ngOnInit(): void {
    this.createform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      document: ['', [Validators.required]],
      photo: [''],
      state: ['', [Validators.required]],
      conditions: ['', [Validators.required]],
      city: ['', [Validators.required]],
      number: ['', [Validators.required]],
      district: ['', [Validators.required]],
      street: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
    });
  }

  public get stateOptions(): any {
    return this.stateService.getStateOptions();
  }

  public onSubmitCreateCorporateUser(): void {
    if (this.createform.get('password')?.value != this.createform.get('confirm_password')?.value) {
      this.passwordNotEqual = true
      return;
    }

    this.service.createCorporateUser(
      this.createform.get('name')?.value,
      this.createform.get('phone')?.value,
      this.createform.get('password')?.value,
      this.createform.get('email')?.value,
      this.createform.get('document')?.value,
      this.createform.get('photo')?.value,
      this.createform.get('state')?.value,
      this.createform.get('city')?.value,
      this.createform.get('number')?.value,
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

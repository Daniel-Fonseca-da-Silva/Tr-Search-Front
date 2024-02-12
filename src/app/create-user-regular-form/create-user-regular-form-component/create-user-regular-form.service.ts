import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CreateUserRegularFormService {
  constructor(private http: HttpClient, private router: Router) {}

  isLoading = false;

  public createRegularUser(
    name: string,
    cellphone: string,
    password: string,
    email: string,
    documentation: string,
    photo: string,
    birthday: string,
    gender: string,
    city: string,
    number: string,
    state: string,
    district: string,
    street: string,
    zipCode: string
  ): void {
    const postData = {
      name,
      cellphone,
      password,
      email,
      documentation,
      photo,
      birthday,
      gender,
      city,
      number,
      state,
      district,
      street,
      zipCode
    };

    this.http.post('http://localhost:8080/api/v1/users', postData).subscribe({
      next: (response: any) => {
        this.router.navigate(['/choose-router']);
      },
      error: (error) => {
        console.error('Failed to register user', error);
      },
    });
  }
}

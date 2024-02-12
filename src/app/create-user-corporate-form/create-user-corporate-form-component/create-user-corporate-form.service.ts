import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CreateUserCorporateFormService {
  constructor(private http: HttpClient, private router: Router) {}
  isLoading = false;

  public createCorporateUser(
    name: string,
    cellphone: string,
    password: string,
    email: string,
    documentation: string,
    photo: string,
    state: string,
    city: string,
    number: string,
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
      state,
      city,
      number,
      district,
      street,
      zipCode,
    };
    console.log(postData);

    this.http.post('http://localhost:8080/api/v1/corporate', postData).subscribe({
      next: (response: any) => {
        this.router.navigate(['/choose-router']);
      },
      error: (error) => {
        console.error('Failed to register user', error);
      },
    });
  }
}

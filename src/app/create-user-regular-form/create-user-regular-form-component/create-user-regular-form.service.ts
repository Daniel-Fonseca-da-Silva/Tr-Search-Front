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
    gender: string
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
    };

    this.http.post('http://localhost:8080/api/v1/users', postData).subscribe({
      next: (response: any) => {
        this.router.navigate(['/choose-router']);
      },
      error: (error) => {
        console.error('FALEID ATTEMPT TO LOGIN PAGE', error);
      },
    });
  }
}

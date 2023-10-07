import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginUserRegularFormService {
  constructor(private http: HttpClient) {}

  public loginRegularUser(email: string, password: string): void {
    const loginData = { email, password };

    this.http
      .post('http://localhost:8080/api/v1/login/user', loginData)
      .subscribe({
        next: (response) => {
          console.log('LOGIN WITH SUCCESS! WORKED!', response);
        },
        error: (error) => {
          console.error('FALEID ATTEMPT TO LOGIN PAGE', error);
        },
      });
  }
}

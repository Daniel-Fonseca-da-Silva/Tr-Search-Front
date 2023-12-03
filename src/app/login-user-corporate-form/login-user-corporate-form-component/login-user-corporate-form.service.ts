import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtPayload, jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class LoginUserCorporateFormService {
  private authToken: string = "";

  constructor(private http: HttpClient, private router: Router) {}

  setAuthToken(token: string): void {
    this.authToken = token;
  }

  getAuthToken(): string {
    return this.authToken;
  }

  public loginCorporateUser(email: string, password: string): void {

    const loginData = { email, password };

    this.http
      .post('http://localhost:8080/api/v1/login/corporate', loginData)
      .subscribe({
        next: (response: any) => {
          this.setAuthToken(response.token);
          const token = this.getAuthToken();

          const decoded: any = jwtDecode(token);

          sessionStorage.setItem('id', decoded.id);
          sessionStorage.setItem('email', decoded.email);
          sessionStorage.setItem('token', this.getAuthToken());
          sessionStorage.setItem('photo', decoded.photo);


          this.router.navigate(['/home']);

        },
        error: (error) => {
          console.error('FALEID ATTEMPT TO LOGIN PAGE', error);
        },
      });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class LoginUserCorporateFormService {
  private authToken!: string;
  existError!: boolean;
  private baseUrl: string = 'http://localhost:8080/api/v1/login/corporate';

  constructor(private http: HttpClient, private router: Router) {}

  public setAuthToken(token: string): void {
    this.authToken = token;
  }

  public getAuthToken(): string {
    return this.authToken;
  }

  public loginCorporateUser(email: string, password: string): void {
    const loginData = { email, password };

    this.http.post(this.baseUrl, loginData).subscribe({
      next: (response: any) => {
        this.setAuthToken(response.token);
        const token = this.getAuthToken();

        const decoded: any = jwtDecode(token);

        sessionStorage.setItem('id', decoded.id);
        sessionStorage.setItem('token', this.getAuthToken());
        sessionStorage.setItem('photo', decoded.photo);
        sessionStorage.setItem('role', decoded.role);
        sessionStorage.setItem('email', decoded.email);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.existError = true;
      },
    });
  }
}

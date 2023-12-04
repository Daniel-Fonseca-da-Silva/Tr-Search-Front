import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class LoginUserRegularFormService {
  existError!: boolean;
  private authToken!: string;
  private baseUrl: string = 'http://localhost:8080/api/v1/login/user';

  constructor(private http: HttpClient, private router: Router) {}

  setAuthToken(token: string): void {
    this.authToken = token;
  }

  getAuthToken(): string {
    return this.authToken;
  }

  public loginRegularUser(email: string, password: string): void {
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

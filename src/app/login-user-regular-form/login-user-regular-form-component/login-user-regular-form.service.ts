import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/loading';

@Injectable({
  providedIn: 'root',
})
export class LoginUserRegularFormService {
  private authToken: string = "";
  
  constructor(private http: HttpClient,  private router: Router, private loadingService: LoadingService) {}

  setAuthToken(token: string): void {
    this.authToken = token;
  }

  getAuthToken(): string {
    return this.authToken;
  }

  public loginRegularUser(email: string, password: string): void {
    const loginData = { email, password };

    this.http
      .post('http://localhost:8080/api/v1/login/user', loginData)
      .subscribe({
        next: (response: any) => {
          this.setAuthToken(response.token);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('FALEID ATTEMPT TO LOGIN PAGE', error);
        },
      });
  }
}

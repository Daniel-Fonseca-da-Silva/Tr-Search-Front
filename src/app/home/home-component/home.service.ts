import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl: string = "http://localhost:8080/api/v1/corporate/";
  userInfo: any = [];

  constructor(private http: HttpClient, private router: Router) {}

  get_corporate_info() {

    const token = sessionStorage.getItem('token');

    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      this.http
      .get(this.baseUrl + sessionStorage.getItem('email'), { headers })
      .subscribe({
        next: (response: any ) => {
          this.userInfo = Object.values(response);
        }
      });
    } else {
      console.error('Token was not found.');
    }
  }

}

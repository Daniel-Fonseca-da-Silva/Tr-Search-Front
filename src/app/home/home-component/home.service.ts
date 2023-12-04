import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  baseUrl: string = 'http://localhost:8080/api/v1/';
  userInfo: any = [];
  kindUser!: string;
  userValues: { [chave: string]: string } = {};

  constructor(private http: HttpClient, private router: Router) {}

  get_user_info() {
    const token = sessionStorage.getItem('token');
    this.kindUser = sessionStorage.getItem('role')!;

    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
      if (this.kindUser == 'ROLE_CORPORATE') {
        this.http
          .get(this.baseUrl + 'corporate/' + sessionStorage.getItem('email'), {
            headers,
          })
          .subscribe({
            next: (response: any) => {
              this.userInfo = Object.values(response);
                this.userValues['name'] = this.userInfo[0];
                this.userValues['email'] = this.userInfo[2];
            },
          });
      } else {
        if (this.kindUser == 'ROLE_USER') {
          this.http
            .get(this.baseUrl + 'users/' + sessionStorage.getItem('email'), {
              headers,
            })
            .subscribe({
              next: (response: any) => {
                this.userInfo = Object.values(response);
                this.userValues['name'] = this.userInfo[1];
                this.userValues['email'] = this.userInfo[3];
              },
            });
        }
      }
    } else {
      console.error('Token was not found.');
    }
  }
}

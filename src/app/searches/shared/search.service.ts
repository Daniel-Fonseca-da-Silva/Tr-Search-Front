import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getName(name: string): Observable<any> {
    console.log();
    return this.http.get("http://localhost:8080/api/v1/establishment/name/" + name);
  }

}

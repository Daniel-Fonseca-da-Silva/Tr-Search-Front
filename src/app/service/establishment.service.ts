import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Establishment } from '../model/establishment';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(this.baseUrl);
  }

}

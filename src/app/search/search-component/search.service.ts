import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataSharingService } from 'src/app/sharing';
import { Establishment } from 'src/app/sharing/interface/establishment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl: string = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient, private dataSharingService: DataSharingService) {}

  public searchEstablishment(city: string, category: string): void {
    const url = `${this.baseUrl}/establishment/category/${category.toUpperCase()}/city/${city}`;

    this.http.get<Establishment[]>(url).subscribe({
      next: (response: Establishment[]) => {
        if(response.length) {
          this.dataSharingService.sendEstablishmentData(response);
        }
      },
      error: (error) => {
        console.error('Error when searching establishment:', error);
      }
    });

  }

}

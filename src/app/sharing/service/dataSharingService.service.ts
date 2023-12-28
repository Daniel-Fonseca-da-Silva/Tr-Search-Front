import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Establishment } from '../interface/establishment';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private establishmentDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});
  establishmentData$: Observable<any> = this.establishmentDataSubject.asObservable();

  constructor() { }

  public sendEstablishmentData(data: Establishment[]): void {
    this.establishmentDataSubject.next(data);
  }
}

import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/sharing';

@Component({
  selector: 'app-search-establishment',
  templateUrl: './search-establishment.component.html',
  styleUrls: ['./search-establishment.component.css']
})
export class SearchEstablishmentComponent implements OnInit {

  establishmentData: any[] = [];

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit(): void {
    this.dataSharingService.establishmentData$.subscribe(data => {
      this.establishmentData = data;
    });
  }

}

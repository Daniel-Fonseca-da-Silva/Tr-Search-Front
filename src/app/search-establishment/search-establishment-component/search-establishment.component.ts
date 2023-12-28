import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { HomeComponent } from 'src/app/home';
import { HomeService } from 'src/app/home/home-component/home.service';
import { DataSharingService } from 'src/app/sharing';

@Component({
  selector: 'app-search-establishment',
  templateUrl: './search-establishment.component.html',
  styleUrls: ['./search-establishment.component.css']
})
export class SearchEstablishmentComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  establishmentData: any[] = [];

  constructor(private dataSharingService: DataSharingService, private home: HomeComponent, private homeService: HomeService) {}

  ngOnInit(): void {
    this.dataSharingService.establishmentData$.subscribe(data => {
      this.establishmentData = data;
    });
  }

  public changeToSearch(): void {
    this.home.pageWelcome = false;
    this.homeService.changeComponent('search');
  }

}

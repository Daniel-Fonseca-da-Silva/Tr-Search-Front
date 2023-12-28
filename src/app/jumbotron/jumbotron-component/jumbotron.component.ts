import { Component } from '@angular/core';
import { HomeService } from 'src/app/home/home-component/home.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent {

  constructor(private homeService: HomeService) {}

  public changeToSearch(): void {
    this.homeService.changeComponent('search');
  }

}

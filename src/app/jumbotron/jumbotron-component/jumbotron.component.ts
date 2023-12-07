import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/home-component/home.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent {

  constructor(private router: Router, private homeService: HomeService) {}

  onLinkClick(route: string) {
    this.router.navigate([route]);
  }

  changeToSearch() {
    this.homeService.changeComponent('search');
  }

}

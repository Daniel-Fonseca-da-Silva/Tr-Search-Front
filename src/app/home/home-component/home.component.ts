import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  faUser,
  faMagnifyingGlass,
  faScrewdriverWrench,
  faCircleXmark,
  faAddressCard,
  faUserPlus,
  faBuilding,
  faShop,
} from '@fortawesome/free-solid-svg-icons';
import { initFlowbite } from 'flowbite';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faShop = faShop;
  faBuilding = faBuilding;
  faAddressCard = faAddressCard;
  faCircleXmark = faCircleXmark;
  faUserPlus = faUserPlus;
  faScrewdriverWrench = faScrewdriverWrench;
  faUser = faUser;
  faMagnifyingGlass = faMagnifyingGlass;
  kindUser!: string;
  pageWelcome: boolean = true;

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    protected homeService: HomeService
  ) {}


  ngOnInit(): void {
    this.kindUser = sessionStorage.getItem('role')!;
    this.getRoleUser();
    initFlowbite();
    if(this.pageWelcome == true) {
      this.homeService.changeComponent('welcome');
    }
  }

  getRoleUser(): void {
    this.homeService.get_user_info();
  }

  getRoleCorporate(): boolean {
    if (this.kindUser == 'ROLE_CORPORATE') {
      return true;
    } else {
      return false;
    }
  }

  routeToHome(): void {
    this.router.navigateByUrl('/choose-router');
    this.elementRef.nativeElement.remove();
  }

  changeToSearch() {
    this.pageWelcome = false;
    this.homeService.changeComponent('search');
  }

}

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
  photoProfile: string =
    'https://images.pexels.com/photos/259239/pexels-photo-259239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  kindUser!: string;

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.kindUser = sessionStorage.getItem('role')!;
    this.photoProfile = sessionStorage.getItem('photo')!;
    this.getRoleUser();
    initFlowbite();
  }

  getName(): string {
    return this.homeService.userValues['name'];
  }

  getEmail(): string {
    return this.homeService.userValues['email'];
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
}

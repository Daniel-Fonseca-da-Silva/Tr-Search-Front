import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photoProfile: string = 'https://images.pexels.com/photos/259239/pexels-photo-259239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.homeService.get_corporate_info();

    this.photoProfile = sessionStorage.getItem('photo')!;
  }

  getName(): string | null {
    return this.homeService.userInfo[0];
  }

  getEmail(): string | null {
    return this.homeService.userInfo[2];
  }

  routeToHome(): void {
    this.router.navigateByUrl('/choose-router');
    this.elementRef.nativeElement.remove();
  }
}

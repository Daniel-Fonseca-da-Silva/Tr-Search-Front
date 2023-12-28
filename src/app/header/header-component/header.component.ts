import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/home-component/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  photoProfile: string =
    'https://images.pexels.com/photos/259239/pexels-photo-259239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private homeService: HomeService
  ) {}

  public ngOnInit(): void {
    this.photoProfile = sessionStorage.getItem('photo')!;
  }

  public getName(): string {
    return this.homeService.userValues['name'];
  }

  public getEmail(): string {
    return this.homeService.userValues['email'];
  }

  public changeToSearch(): void {
    this.homeService.changeComponent('search');
  }

  routeToHome(): void {
    this.router.navigateByUrl('/choose-router');
    this.elementRef.nativeElement.remove();
  }
}

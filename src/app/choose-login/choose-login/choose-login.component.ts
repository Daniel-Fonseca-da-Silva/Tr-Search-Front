import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-login',
  templateUrl: './choose-login.component.html',
  styleUrls: ['./choose-login.component.css']
})
export class ChooseLoginComponent {
  constructor(
    private router: Router,
    private elementRef: ElementRef
  ) {}

  routeRegularUser() {
    this.router.navigateByUrl('/regular-user-login');
    this.elementRef.nativeElement.remove();
  }

  routeCorporateUser() {
    this.router.navigateByUrl('/regular-corporate-login');
    this.elementRef.nativeElement.remove();
  }

  

}

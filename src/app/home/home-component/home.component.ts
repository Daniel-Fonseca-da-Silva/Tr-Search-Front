import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private router: Router,
    private elementRef: ElementRef
  ) {}

  routeToHome(): void {
    this.router.navigateByUrl('/choose-router');
    this.elementRef.nativeElement.remove();
  }
}

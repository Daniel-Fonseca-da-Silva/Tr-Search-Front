import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // faCoffee = faCoffee;
  title = 'tr-search-front';

  ngOnInit(): void {
    initFlowbite();
  }

}

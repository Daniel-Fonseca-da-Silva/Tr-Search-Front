import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/home/home-component/home.service';
import { SearchService } from './search.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  establishmentForm!: FormGroup;
  displayModal: boolean = false;

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private homeService: HomeService
  ) {}

  public ngOnInit(): void {
    initFlowbite();
    this.establishmentForm = this.fb.group({
      city: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
  }

  public onSearchEstablishment(): void {
    this.searchService.searchEstablishment(
      this.establishmentForm.get('city')?.value,
      this.establishmentForm.get('category')?.value
    );
    this.homeService.changeComponent('show-establishment');
  }

}

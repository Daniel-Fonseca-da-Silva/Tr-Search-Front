import { Component, OnInit } from '@angular/core';
import { Establishment } from 'src/app/model/establishment';
import { EstablishmentService } from 'src/app/service/establishment.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  list: Establishment[] = [];

  constructor(private service: EstablishmentService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
    })
  }

}

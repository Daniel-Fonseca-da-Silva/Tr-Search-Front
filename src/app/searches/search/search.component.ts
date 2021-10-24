import { Component, OnInit } from '@angular/core';

import { SearchService } from '../';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  establishment: Array<any> = new Array();

  constructor(private service: SearchService) { }

  ngOnInit(): void { }

  findName(searched: string): void {

    this.service.getName(searched).subscribe(establishment => {
      this.establishment = establishment;
    }, err => {
      if (!searched.length)
        console.log('Campo em branco, verifique.');
      console.log('Erro ao buscar estabelecimento. ', err);
    });
  }

}

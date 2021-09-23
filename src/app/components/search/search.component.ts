import { Component, OnInit } from '@angular/core';
import { Establishment } from 'src/app/model/establishment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  lista: Establishment[] = [
    {
  	name_est: "José e Mariana Restaurante ME",
	site_est: 'www.joseemarianarestauranteme.com.br',
	address_est: 'Rua do Planetas',
	number_est: '465',
	cep_est: '06702-260',
	email_est: 'estoque@joseemarianarestauranteme.com.br',
	tel_est: '(11) 3913-7551',
	cel_est: '(11) 99701-1502',
	district_est: 'Residencial Palma de Maiorca',
	city_est: 'Cotia',
	state_est: 'São Paulo',
	category_est: 'Lanchonete',
	img_url_est: 'https://cdn.pixabay.com/photo/2015/04/20/13/30/kitchen-731351_960_720.jpg',
	description_est: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
	{
	  name_est: "Luís e Sara Doces & Salgados Ltda",
	  site_est: 'www.luisesaradocessalgadosltda.com.br',
	  address_est: 'Alice Coutinho',
	  number_est: '155',
	  cep_est: '06702-260',
	  email_est: 'presidencia@luisesaradocessalgadosltda.com.br',
	  tel_est: '(27) 3576-9314',
	  cel_est: '(27) 99426-9067',
	  district_est: 'Alice Coutinho',
	  city_est: 'Cariacica',
	  state_est: 'Espirito Santo',
	  category_est: 'Padaria',
	  img_url_est: 'https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_960_720.jpg',
	  description_est: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
	  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

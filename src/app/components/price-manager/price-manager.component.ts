import { Component, OnInit } from '@angular/core';
import {PriceService} from '../../services/price.service';

@Component({
  selector: 'app-price-manager',
  templateUrl: './price-manager.component.html',
  styleUrls: ['./price-manager.component.css']
})
export class PriceManagerComponent implements OnInit {
  price = {
    instrument: '',
    value: '',
    type: ''
  };
  submitted = false;
  constructor(private priceService: PriceService) { }

  ngOnInit(): void {
  }

  savePrice(): void{
    const data = {
      instrument: this.price.instrument,
      value: this.price.value,
      type: this.price.type
    };
    this.priceService.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newPrice(): void{
    this.submitted = false;
    this.price = {
      instrument: '',
      value: '',
      type: ''
    };
  }
}

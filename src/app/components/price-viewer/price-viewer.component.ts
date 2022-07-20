import { Component, OnInit } from '@angular/core';
import {PriceService} from '../../services/price.service';

@Component({
  selector: 'app-price-viewer',
  templateUrl: './price-viewer.component.html',
  styleUrls: ['./price-viewer.component.css']
})
export class PriceViewerComponent implements OnInit {
  prices: any;
  currentIndex = -1;
  currentPrice = null;
  title = '';
  constructor(private priceService: PriceService) { }

  ngOnInit(): void {
    this.retrievePrices();
  }

  retrievePrices(): void{
    this.priceService.getAll()
      .subscribe(
        data => {
          this.prices = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
  setActivePrice(price, index): void {
    this.currentPrice = price;
    this.currentIndex = index;
  }

}

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
  instrument = '';
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
  constructor(private priceService: PriceService) { }

  ngOnInit(): void {
    this.retrievePrices();
  }
  getRequestParams(searchInstrument: string, page: number, pageSize: number): any {
    // tslint:disable-next-line:prefer-const
    let params = {};
    if (searchInstrument) {
      params[`instrument`] = searchInstrument;
    }
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }
  /*retrievePrices(): void{ //without pagination
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
  }*/
  retrievePrices(): void{
    const params = this.getRequestParams(this.instrument, this.page, this.pageSize);
    this.priceService.getAll(params)
        .subscribe(
            response => {
              const { prices, totalItems } = response;
              this.prices = prices;
              this.count = totalItems;
              console.log(response);
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

  handlePageChange(event): void {
    this.page = event;
    this.retrievePrices();
  }
  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrievePrices();
  }
 /* searchInstrument() {

  }*/
}

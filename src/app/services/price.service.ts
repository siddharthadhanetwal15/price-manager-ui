import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const baseUrl = 'http://localhost:8080/price-hist/price';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any>{
    return this.http.get(baseUrl);
  }
  create(data): Observable<any>{
    return this.http.post(baseUrl, data);
  }
}

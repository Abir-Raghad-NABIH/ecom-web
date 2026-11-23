import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class Api {
  private http = inject(HttpClient);
  private base = 'http://localhost:8888';

  customers() {
    return this.http.get<any>(`${this.base}/CUSTOMER-SERVICE/customers`);
  }
  products() {
    return this.http.get<any>(`${this.base}/INVENTORY-SERVICE/products`);
  }
  bill(id: number) {
    return this.http.get<any>(`${this.base}/BILLING-SERVICE/api/bills/${id}`);
  }
}
import { Component, OnInit, inject, signal } from '@angular/core';
import { Api } from '../services/api';

@Component({
  selector: 'app-products',
  imports: [],
  template: `
    <h2>Produits</h2>
    <table border="1" cellpadding="6">
      <tr><th>ID</th><th>Nom</th><th>Prix</th><th>Quantité</th></tr>
      @for (p of products(); track p.id) {
        <tr><td>{{ p.id }}</td><td>{{ p.name }}</td><td>{{ p.price }}</td><td>{{ p.quantity }}</td></tr>
      }
    </table>
  `
})
export class Products implements OnInit {
  private api = inject(Api);
  products = signal<any[]>([]);

  ngOnInit() {
    this.api.products().subscribe(d => this.products.set(d._embedded.products));
  }
}
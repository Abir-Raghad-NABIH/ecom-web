import { Component, OnInit, inject, signal } from '@angular/core';
import { Api } from '../services/api';

@Component({
  selector: 'app-customers',
  imports: [],
  template: `
    <h2>Clients</h2>
    <table border="1" cellpadding="6">
      <tr><th>ID</th><th>Nom</th><th>Email</th></tr>
      @for (c of customers(); track c.id) {
        <tr><td>{{ c.id }}</td><td>{{ c.name }}</td><td>{{ c.email }}</td></tr>
      }
    </table>
  `
})
export class Customers implements OnInit {
  private api = inject(Api);
  customers = signal<any[]>([]);

  ngOnInit() {
    this.api.customers().subscribe(d => this.customers.set(d._embedded.customers));
  }
}
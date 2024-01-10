import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  listProducts: Product[] = [
    {
      id: 1,
      name: "Coca-Cola",
      description: "Refresco",
      price: 50,
      stock: 100
    },
    {
      id: 2,
      name: "Quilmes",
      description: "Cerveza",
      price: 20,
      stock: 200
    }
  ]
}

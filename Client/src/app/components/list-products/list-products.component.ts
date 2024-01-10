import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  listProducts: Product[] = [
    {
      name: "Coca-Cola",
      description: "Refresco",
      price: 50,
      stock: 100
    },
    {
      name: "Quilmes",
      description: "Cerveza",
      price: 20,
      stock: 200
    }
  ]
}

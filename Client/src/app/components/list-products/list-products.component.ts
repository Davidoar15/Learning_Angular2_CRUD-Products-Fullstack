import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  listProducts: Product[] = []

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getListProducts();
  };
  
  getListProducts() {
    this._productService.getListProducts().subscribe((data) => {
      this.listProducts = data;
    });
  };
}

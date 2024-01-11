import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule, ToastrModule, ProgressBarComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  listProducts: Product[] = []
  loading: boolean = false

  constructor(
    private _productService: ProductService, 
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getListProducts();
  };
  
  getListProducts() {
    this.loading = true;

    setTimeout(() => {
      this._productService.getListProducts().subscribe((data: Product[]) => {
        this.listProducts = data;
        this.loading = false;
      });
    }, 750);
  };

  deleteProduct(id: number) {
    this._productService.deleteProduct(id).subscribe(() => {
      this.getListProducts();
      this.toastr.warning("Product was eliminated successfully", "Product Eliminated!");
    });
  };
}

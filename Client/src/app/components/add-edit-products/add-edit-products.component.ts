import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-products',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, ProgressBarComponent, ToastrModule],
  templateUrl: './add-edit-products.component.html',
  styleUrl: './add-edit-products.component.css'
})
export class AddEditProductsComponent {
  form: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _productService: ProductService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required]
    })
  };

  addProduct() {
    const product: Product = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock
    };

    this.loading = true;
    this._productService.addProduct(product).subscribe(() => {
      this.loading = false;
      this.router.navigate(['/']);
      this.toastr.success(`Product ${product.name} was registered successfully`, "Product Registered!")
    });
  };
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private _productService: ProductService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required]
    })

    this.id = aRouter.snapshot.paramMap.get('id');
  };

  ngOnInit(): void {
    if (this.id !== null) this.getProduct(this.id);
  }

  addProduct() {
    const product: Product = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock
    };

    this.loading = true;
    if (this.id !== null) {
      product.id = this.id;
      this._productService.updateProduct(this.id, product).subscribe(() => {
        this.toastr.info(`Product ${product.name} was updated successfully`, "Product Updated!")
      });
    } else {
      this._productService.addProduct(product).subscribe(() => {
        this.toastr.success(`Product ${product.name} was registered successfully`, "Product Registered!")
      });
    }
    this.loading = false;
    this.router.navigate(['/']);

  };

  getProduct(id: string) {
    this.loading = true;
    this._productService.getProduct(id).subscribe((data: Product) => {
      this.loading = false;
      this.form.setValue({
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock
      });
    })
  };
}

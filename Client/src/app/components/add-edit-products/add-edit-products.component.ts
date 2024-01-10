import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-add-edit-products',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './add-edit-products.component.html',
  styleUrl: './add-edit-products.component.css'
})
export class AddEditProductsComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required]
    })
  };

  addProduct() {
    // console.log(this.form.value.name);
    const product: Product = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock
    };
    console.log(product);
  };
}

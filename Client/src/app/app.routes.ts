import { Routes } from '@angular/router';

import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductsComponent } from './components/add-edit-products/add-edit-products.component';

export const routes: Routes = [
    { path: "", component: ListProductsComponent },
    { path: "add", component: AddEditProductsComponent },
    { path: "edit/:id", component: AddEditProductsComponent },
    { path: "**", redirectTo: "", pathMatch: "full" }
];
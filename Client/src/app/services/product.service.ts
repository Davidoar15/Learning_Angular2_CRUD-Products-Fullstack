import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private appUrl: string
  private apiUrl: string

  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:3000/';
    this.apiUrl = 'products/'
  }

  getListProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.appUrl}${this.apiUrl}`);
  };

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`);
  };

  addProduct(product: Product): Observable<void> {
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, product)
  };
}

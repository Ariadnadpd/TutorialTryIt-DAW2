import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Store the array of the current products in the cart
  items: Product[] = [];
  
  constructor(
    private http: HttpClient
  ) { }

  // Appends a product to an array of items.
  addToCart(product: Product) {
    this.items.push(product);
  }

  // Returns each item with its associated quantity 
  getItems(){
    return this.items;
  }

  // Returns an empty array of items
  clearCart(){
    this.items = [];
    return this.items;
  }

  // Method that uses the HttpClient get() method.
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('assets/shipping.json');
  }

}

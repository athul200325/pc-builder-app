import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../shared/header/header';
import { Footer } from '../shared/footer/footer';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { InputNumberModule } from 'primeng/inputnumber';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-cart',
  imports: [
    CommonModule,
    FormsModule,
    Header,
    Footer,
    ButtonModule,
    CardModule,
    TagModule,
    InputNumberModule,
    DividerModule,
    CheckboxModule
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  cartItems = [
    {
      id: 1,
      name: 'Intel Core i9-13900K',
      category: 'CPU',
      price: 589,
      quantity: 1,
      image: 'https://via.placeholder.com/150x100',
      inStock: true
    },
    {
      id: 2,
      name: 'NVIDIA RTX 4080',
      category: 'GPU',
      price: 1199,
      quantity: 1,
      image: 'https://via.placeholder.com/150x100',
      inStock: true
    },
    {
      id: 3,
      name: 'Corsair Vengeance DDR5-5600 32GB',
      category: 'RAM',
      price: 299,
      quantity: 2,
      image: 'https://via.placeholder.com/150x100',
      inStock: false
    }
  ];

  promoCode = '';
  discount = 0;
  shipping = 29.99;
  tax = 0;

  updateQuantity(item: any, quantity: number) {
    if (quantity > 0) {
      item.quantity = quantity;
    }
  }

  removeItem(itemId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
  }

  applyPromoCode() {
    if (this.promoCode === 'SAVE10') {
      this.discount = this.subtotal * 0.1;
    }
  }

  get subtotal() {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  get total() {
    this.tax = this.subtotal * 0.08; // 8% tax
    return this.subtotal - this.discount + this.shipping + this.tax;
  }

  get itemCount() {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }
}

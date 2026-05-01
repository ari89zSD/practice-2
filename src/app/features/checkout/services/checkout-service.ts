import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CheckoutService {

  constructor() {}

  saveShipping(data: any) {
    localStorage.setItem('shipping', JSON.stringify(data));
  }

  getShipping() {
    return JSON.parse(localStorage.getItem('shipping') || '{}');
  }

  savePayment(data: any) {
    localStorage.setItem('payment', JSON.stringify(data));
  }

  getPayment() {
    return JSON.parse(localStorage.getItem('payment') || '{}');
  }

  placeOrder(order: any) {
    localStorage.setItem('order', JSON.stringify(order));
  }

  getOrder() {
    return JSON.parse(localStorage.getItem('order') || '{}');
  }

  clearCheckout() {
    localStorage.removeItem('shipping');
    localStorage.removeItem('payment');
  }
}

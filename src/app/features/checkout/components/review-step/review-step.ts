import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartDetailed } from '../../../cart/store/cart.selectors';
import { CheckoutService } from '../../services/checkout-service';

@Component({
  selector: 'app-review-step',
  standalone: false,
  templateUrl: './review-step.html',
  styleUrl: './review-step.scss',
})
export class ReviewStep {
  @Output() back = new EventEmitter<void>();

  cart$: Observable<any>;
  shipping: any;
  payment: any;

  constructor(
    private store: Store,
    private checkoutService: CheckoutService
  ) {
    this.cart$ = this.store.select(selectCartDetailed);
    this.shipping = this.checkoutService.getShipping();
    this.payment = this.checkoutService.getPayment();
  }

  placeOrder() {
    const order = {
      shipping: this.shipping,
      payment: this.payment,
      date: new Date().toISOString()
    };

    this.checkoutService.placeOrder(order);

    window.location.href = '/checkout/confirmation';
  }
}

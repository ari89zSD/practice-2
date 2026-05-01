import { Component } from '@angular/core';
import { CheckoutService } from '../../services/checkout-service';

@Component({
  selector: 'app-confirmation-page',
  standalone: false,
  templateUrl: './confirmation-page.html',
  styleUrl: './confirmation-page.scss',
})
export class ConfirmationPage {
  order: any;

  constructor(private checkoutService: CheckoutService) {
    this.order = this.checkoutService.getOrder();
  }
}

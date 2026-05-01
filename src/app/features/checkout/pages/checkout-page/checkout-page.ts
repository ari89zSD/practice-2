import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  standalone: false,
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.scss',
})
export class CheckoutPage {
  step: number;

  constructor() {
    this.step = 1;
  }

  goTo(step: number) {
    this.step = step;
  }
}

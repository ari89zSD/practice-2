import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CheckoutService } from '../../services/checkout-service';

@Component({
  selector: 'app-payment-step',
  standalone: false,
  templateUrl: './payment-step.html',
  styleUrl: './payment-step.scss',
})
export class PaymentStep {
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private checkoutService: CheckoutService
  ) {
    this.form = this.fb.group({
      cardNumber: ['', Validators.required],
      expiry: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }

  continue() {
    if (this.form.valid) {
      this.checkoutService.savePayment(this.form.value);
      this.next.emit();
    }
  }
}

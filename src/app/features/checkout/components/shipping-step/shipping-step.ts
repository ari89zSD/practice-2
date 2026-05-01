import { Component, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CheckoutService } from '../../services/checkout-service';

@Component({
  selector: 'app-shipping-step',
  standalone: false,
  templateUrl: './shipping-step.html',
  styleUrl: './shipping-step.scss',
})
export class ShippingStep {

  @Output() next = new EventEmitter<void>();

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private checkoutService: CheckoutService
  ) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  continue() {
    if (this.form.valid) {
      this.checkoutService.saveShipping(this.form.value);
      this.next.emit();
    }
  }
}

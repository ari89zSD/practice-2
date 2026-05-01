import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutPage } from './pages/checkout-page/checkout-page';
import { ShippingStep } from './components/shipping-step/shipping-step';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentStep } from './components/payment-step/payment-step';
import { ReviewStep } from './components/review-step/review-step';
import { ConfirmationPage } from './pages/confirmation-page/confirmation-page';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CheckoutPage,
    ShippingStep,
    PaymentStep,
    ReviewStep,
    ConfirmationPage
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: CheckoutPage },
      { path: 'confirmation', component: ConfirmationPage }
    ])
  ]
})
export class CheckoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './store/cart.effects';
import { CartPage } from './pages/cart-page/cart-page';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CartPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CartPage }]),
    StoreModule.forFeature('cart', cartReducer),
    EffectsModule.forFeature([CartEffects])
  ]
})
export class CartModule { }

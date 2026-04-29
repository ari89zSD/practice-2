import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CartActions from './cart.actions';
import { tap, map, withLatestFrom } from 'rxjs/operators';
import { selectCartItems } from './cart.selectors';
import { Store } from '@ngrx/store';

@Injectable()
export class CartEffects {
  saveCart$: any;
  loadCart$: any;

  constructor(private actions$: Actions, private store: Store) {
    this.saveCart$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(
            CartActions.addToCart,
            CartActions.removeFromCart,
            CartActions.updateQuantity
          ),
          withLatestFrom(this.store.select(selectCartItems)),
          tap(([action, items]) => {
            localStorage.setItem('cart', JSON.stringify(items));
          })
        ),
      { dispatch: false }
    );

    this.loadCart$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CartActions.loadCartFromStorage),
        map(() => {
          const items = JSON.parse(localStorage.getItem('cart') || '[]');
          return CartActions.cartLoaded({ items });
        })
      )
    );
  }
}
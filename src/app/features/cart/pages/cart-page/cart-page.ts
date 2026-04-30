import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartCount, selectCartDetailed } from '../../store/cart.selectors';
import { removeFromCart, updateQuantity } from '../../store/cart.actions';


@Component({
  selector: 'app-cart-page',
  standalone: false,
  templateUrl: './cart-page.html',
  styleUrls: ['./cart-page.scss']
})
export class CartPage {

  cart$;
  cartCount$;

  constructor(private store: Store) {
    this.cart$ = this.store.select(selectCartDetailed);
    this.cartCount$ = this.store.select(selectCartCount);
  }

  updateQty(productId: number, qty: number) {
    this.store.dispatch(updateQuantity({ productId, quantity: qty }));
  }

  remove(productId: number) {
    this.store.dispatch(removeFromCart({ productId }));
  }

  getSubtotal(item: any) {
    return item.product.price * item.quantity;
  }
}

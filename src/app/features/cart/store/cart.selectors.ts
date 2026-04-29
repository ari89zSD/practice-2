import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartState } from './cart.state';
import { selectProducts } from '../../products/store/products.selectors';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  state => state.items
);

export const selectCartCount = createSelector(
  selectCartItems,
  items => items.reduce((sum, item) => sum + item.quantity, 0)
);

export const selectCartDetailed = createSelector(
  selectCartItems,
  selectProducts,
  (items, products) =>
    items.map(item => ({
      ...item,
      product: products.find(p => p.id === item.productId)
    }))
);
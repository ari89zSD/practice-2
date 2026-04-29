import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ productId: number }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ productId: number }>()
);

export const updateQuantity = createAction(
  '[Cart] Update Quantity',
  props<{ productId: number; quantity: number }>()
);

export const loadCartFromStorage = createAction('[Cart] Load From Storage');

export const cartLoaded = createAction(
  '[Cart] Loaded',
  props<{ items: { productId: number; quantity: number }[] }>()
);
import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';
import { initialState } from './cart.state';


export const cartReducer = createReducer(
  initialState,

  on(CartActions.cartLoaded, (state, { items }) => ({
    ...state,
    items
  })),

  on(CartActions.addToCart, (state, { productId }) => {
    const existing = state.items.find(i => i.productId === productId);

    if (existing) {
      return {
        ...state,
        items: state.items.map(i =>
          i.productId === productId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      };
    }

    return {
      ...state,
      items: [...state.items, { productId, quantity: 1 }]
    };
  }),

  on(CartActions.removeFromCart, (state, { productId }) => ({
    ...state,
    items: state.items.filter(i => i.productId !== productId)
  })),

  on(CartActions.updateQuantity, (state, { productId, quantity }) => ({
    ...state,
    items: state.items.map(i =>
      i.productId === productId ? { ...i, quantity } : i
    )
  }))
);
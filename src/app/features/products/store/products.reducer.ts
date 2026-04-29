import { createReducer, on } from "@ngrx/store";
import { initialState } from "./products.state";
import { loadProducts, loadProductsSuccess, loadProductsFailure } from "./products.actions";

export const productsReducer = createReducer(
    initialState,

    on(loadProducts, state => ({
        ...state,
        loading: true,
        error: null
    })),

    on(loadProductsSuccess, (state, { products }) => ({
        ...state,
        loading: false,
        products
    })),

    on(loadProductsFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    }))
);
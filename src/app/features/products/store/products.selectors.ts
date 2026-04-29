import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./products.state";

export const selectProductsState = createFeatureSelector<ProductState>('products');

export const selectProducts = createSelector(
    selectProductsState,
    state => state.products
)

export const selectLoading = createSelector(
    selectProductsState,
    state => state.loading
)

export const selectError = createSelector(
    selectProductsState,
    state => state.error
)

export const selectProductById = (id: number) => 
    createSelector(
        selectProducts,
        (products) => products.find(p => p.id === id)
    );
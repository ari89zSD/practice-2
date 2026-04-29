import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../services/product-service";
import { catchError, map, mergeMap, of } from "rxjs";
import { loadProducts, loadProductsFailure, loadProductsSuccess } from "./products.actions";

@Injectable()
export class ProductsEffects {
    private actions$ = inject(Actions);
    private productsService = inject(ProductService);

    loadProducts$ = createEffect(() => 
        this.actions$.pipe(
            ofType(loadProducts),
            mergeMap(() => 
                this.productsService.products$.pipe(
                    map(products => loadProductsSuccess({ products })),
                    catchError(err => of(loadProductsFailure({ error: err})))
                )
            )
        )
    )

    constructor() {}
}
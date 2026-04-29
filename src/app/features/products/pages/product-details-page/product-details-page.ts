import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, switchMap } from 'rxjs';
import { selectProductById } from '../../store/products.selectors';
import { addToCart } from '../../../cart/store/cart.actions';

@Component({
  selector: 'app-product-details-page',
  standalone: false,
  templateUrl: './product-details-page.html',
  styleUrl: './product-details-page.scss',
})
export class ProductDetailsPage {

  product$: Observable<any>;

  constructor(private route: ActivatedRoute, private store: Store) {
    this.product$ = this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => this.store.select(selectProductById(id)))
    );
  }

  add(productId: number) {
    this.store.dispatch(addToCart({ productId }));
  }

}

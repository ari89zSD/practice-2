import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../../../../shared/models/product.model';
import { FilterService } from '../../services/filter-service';
import { Store } from '@ngrx/store';
import { selectProducts } from '../../store/products.selectors';
import { loadProducts } from '../../store/products.actions';
import { SortService } from '../../services/sort-service';
import { PaginationService } from '../../services/pagination-service';
import { addToCart } from '../../../cart/store/cart.actions';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  standalone: false,
  styleUrls: ['./product-list.scss']
})
export class ProductList implements OnInit {

  products$!: Observable<Product[]>;
  totalItems = 0;

  constructor(
    private store: Store,
    private filterService: FilterService,
    private sortService: SortService,
    private paginationService: PaginationService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.products$ = combineLatest([
      this.store.select(selectProducts),
      this.filterService.category$,
      this.filterService.price$,
      this.filterService.rating$,
      this.filterService.search$,
      this.sortService.sort$,
      this.paginationService.page$,
      this.paginationService.pageSize$
    ]).pipe(
      map(([products, category, price, rating, search, sort, page, pageSize]) => {

        const searchTerm = search.toLowerCase();

        let filtered = products
          .filter(p => !category || p.category === category)
          .filter(p => {
            if (!price) return true;
            const [min, max] = price;
            return p.price >= min && p.price <= max;
          })
          .filter(p => !rating || p.rating >= rating) 
          .filter(p => p.name.toLowerCase().includes(searchTerm));

        if (sort === 'price-asc') {
          filtered = [...filtered].sort((a, b) => a.price - b.price);
        } else if (sort === 'price-desc') {
          filtered = [...filtered].sort((a, b) => b.price - a.price);
        } else if (sort === 'rating-desc') {
          filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        }

        this.totalItems = filtered.length;

        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        return filtered.slice(start, end);
      })
    );
  }

  add(productId: number) {
    this.store.dispatch(addToCart({ productId }));
  }

}
import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../../features/products/services/filter-service';
import { Store } from '@ngrx/store';
import { selectCartCount } from '../../../features/cart/store/cart.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {

  cartCount$: Observable<number> | undefined;
  
  constructor(private filterService: FilterService, private store: Store) {}
  
  ngOnInit(): void {
    this.cartCount$ = this.store.select(selectCartCount);
  }

  onSearch(value: string) {
    this.filterService.setSearch(value);
  }

}

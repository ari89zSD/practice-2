import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductPage } from './pages/product-page/product-page';
import { PriceFilter } from './components/product-filters/price-filter/price-filter';
import { RatingFilter } from './components/product-filters/rating-filter/rating-filter';
import { CategoryFilterComponent } from './components/product-filters/category-filter/category-filter';
import { SharedModule } from '../../shared/shared-module';
import { ProductFilters } from './components/product-filters/product-filters';
import { ProductList } from './components/product-list/product-list';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/products.effects';
import { productsReducer } from './store/products.reducer';
import { SortBar } from './components/sort-bar/sort-bar';
import { Pagination } from './components/pagination/pagination';
import { ProductDetailsPage } from './pages/product-details-page/product-details-page';

@NgModule({
  declarations: [
    ProductPage,
    ProductList,
    CategoryFilterComponent,
    PriceFilter,
    RatingFilter,
    ProductFilters,
    SortBar,
    Pagination,
    ProductDetailsPage
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductsEffects])
  ],
  exports: [
    ProductFilters
  ]
})
export class ProductsModule {}
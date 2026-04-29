import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductPage } from "./pages/product-page/product-page";
import { ProductDetailsPage } from "./pages/product-details-page/product-details-page";

const routes: Routes = [
  {
    path: '',
    component: ProductPage
  },
  {
    path: 'products/:id',
    component: ProductDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from './layout/sidebar/sidebar';
import { Header } from './layout/header/header';
import { Navbar } from './layout/navbar/navbar';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared-module';
import { ProductsModule } from '../features/products/products.module';



@NgModule({
  declarations: [
    Header,
    Sidebar,
    Navbar
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ProductsModule
  ],
  exports: [
    Header,
    Sidebar,
  ]
})
export class CoreModule { }

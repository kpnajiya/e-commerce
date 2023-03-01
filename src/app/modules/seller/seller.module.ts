import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { SellerDashComponent } from './components/seller-dash/seller-dash.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    SellerComponent,
    AddProductsComponent,
    SellerHomeComponent,
    SellerDashComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }

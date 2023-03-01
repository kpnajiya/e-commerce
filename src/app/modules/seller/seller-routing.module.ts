import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { AuthGuard } from './guards/auth.guard';
import { SellerComponent } from './seller.component';

// // const routes: Routes = [{ path: '', component: SellerComponent,children: [
// //  { path:'seller',component: SellerHomeComponent},
// //  {path:'add-products',component:AddProductsComponent}
// // ]

// }];
const routes:Routes = [{path:'',component:SellerComponent,children: [
  {path:'',redirectTo:'seller',pathMatch:'full'},
  {path:'home',component: SellerHomeComponent,canActivate:[AuthGuard]},
  {path:'add-products',component: AddProductsComponent,canActivate:[AuthGuard]}
]

}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }

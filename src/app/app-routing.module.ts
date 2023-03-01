import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { CustomerRegComponent } from './components/customer-reg/customer-reg.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { SellerLoginComponent } from './components/seller-login/seller-login.component';
import { SellerRegComponent } from './components/seller-reg/seller-reg.component';
import { ZipcodeComponent } from './components/zipcode/zipcode.component';

const routes: Routes = [{ path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }, 
{ path: 'seller', loadChildren: () => import('./modules/seller/seller.module').then(m => m.SellerModule) },
{path:'',component:HomeComponent,pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'products',component:ProductsComponent},
{path:'cart',component:CartComponent},
{path:'seller-login',component:SellerLoginComponent},
{path:'seller-reg',component:SellerRegComponent},
{path:'admin-login',component:AdminLoginComponent},
{path:'customer-login',component:CustomerLoginComponent},
{path:'customer-reg',component:CustomerRegComponent},
{path:'zipcode',component:ZipcodeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

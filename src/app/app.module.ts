import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeBodyComponent } from './components/home-body/home-body.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { SellerLoginComponent } from './components/seller-login/seller-login.component';
import { SellerRegComponent } from './components/seller-reg/seller-reg.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { CustomerRegComponent } from './components/customer-reg/customer-reg.component';
import { TestingComponent } from './components/testing/testing.component';
import { ZipcodeComponent } from './components/zipcode/zipcode.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeBodyComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    SellerLoginComponent,
    SellerRegComponent,
    AdminLoginComponent,
    CustomerLoginComponent,
    CustomerRegComponent,
    TestingComponent,
    ZipcodeComponent,
    
    
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

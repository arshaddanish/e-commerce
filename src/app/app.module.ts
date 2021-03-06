import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CollectionsComponent } from './components/home/collections/collections.component';
import { IndexComponent } from './components/home/index/index.component';
import { CollectionItemComponent } from './components/home/collection-item/collection-item.component';
import { LandingComponent } from './components/home/landing/landing.component';
import { TrendingComponent } from './components/home/trending/trending.component';
import { TrendingItemComponent } from './components/home/trending-item/trending-item.component';
import { FeaturesComponent } from './components/home/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { ForgotPasswordComponent } from './components/account/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/account/reset-password/reset-password.component';
import { ProductsComponent } from './components/collection/products/products.component';
import { ProductItemComponent } from './components/collection/product-item/product-item.component';
import { ProductDetailsComponent } from './components/collection/product-details/product-details.component';
import { AccountDetailsComponent } from './components/account/account-details/account-details.component';
import { EditAccountDetailsComponent } from './components/account/edit-account-details/edit-account-details.component';
import { EditAddressComponent } from './components/account/edit-address/edit-address.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CollectionsComponent,
    IndexComponent,
    CollectionItemComponent,
    LandingComponent,
    TrendingComponent,
    TrendingItemComponent,
    FeaturesComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    AccountDetailsComponent,
    EditAccountDetailsComponent,
    EditAddressComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

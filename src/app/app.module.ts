import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

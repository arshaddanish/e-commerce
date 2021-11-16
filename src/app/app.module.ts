import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

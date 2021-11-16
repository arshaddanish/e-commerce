import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CollectionsComponent } from './components/home/collections/collections.component';
import { IndexComponent } from './components/home/index/index.component';
import { CollectionItemComponent } from './components/home/collection-item/collection-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CollectionsComponent,
    IndexComponent,
    CollectionItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListBuyComponent } from './components/product-list-buy/product-list-buy.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { ProductsService } from './services/products.service';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';
import { RestaurantHomeComponent } from './components/restaurant-home/restaurant-home.component';
import { ChefFunctionsComponent } from './components/chef-functions/chef-functions.component';
import { ShoppingCartListComponent } from './components/shopping-cart-list/shopping-cart-list.component';
import { SaucerEditComponent } from './components/saucer-edit/saucer-edit.component';
import { WeeklySaucersComponent } from './components/weekly-saucers/weekly-saucers.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductListBuyComponent,
    NavigationComponent,
    RestaurantListComponent,
    RestaurantFormComponent,
    RestaurantHomeComponent,
    ChefFunctionsComponent,
    ShoppingCartListComponent,
    SaucerEditComponent,
    WeeklySaucersComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

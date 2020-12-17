import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListBuyComponent } from './components/product-list-buy/product-list-buy.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';
import { RestaurantHomeComponent } from './components/restaurant-home/restaurant-home.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { SaucerEditComponent } from './components/saucer-edit/saucer-edit.component';
import { ShoppingCartListComponent } from './components/shopping-cart-list/shopping-cart-list.component';
import { WeeklySaucersComponent } from './components/weekly-saucers/weekly-saucers.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CenterContentComponent } from './components/center-content/center-content.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { BillComponent } from './components/bill/bill.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
//Rutas nuevas
//{ path: 'home', component: PageContainerComponent},
{ path: 'home', component: CenterContentComponent},
{ path: 'login', component: LoginComponent},
{ path: 'register', component: RegisterComponent},
{ path: 'reservation', component: ReservationComponent},
//Rutas anteriores
{ path: 'restaurant-home', component: RestaurantHomeComponent },
{ path: 'restaurant/list',component: ProductListComponent },
{ path: 'restaurant/list-buy',component: ProductListBuyComponent },
{ path: 'restaurant/list-buy/:id',component: ProductListBuyComponent },
{ path: 'restaurant/product-form',component: ProductFormComponent },
{ path: 'restaurant/edit/:id',component: ProductFormComponent },
//RUTAS RESTAURANTES
{ path: 'restaurant/restaurant-list', component: RestaurantListComponent },
{ path: 'restaurant/restaurant-form', component: RestaurantFormComponent },
{ path: 'restaurant/shoppingCart-list', component: ShoppingCartListComponent},
{ path: 'restaurant/saucer-edit/:id/:id', component: SaucerEditComponent},
{ path: 'restaurant/weekly-saucer/:id', component: WeeklySaucersComponent},
{ path: 'restaurant/bill', component: BillComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

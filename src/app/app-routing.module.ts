import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListBuyComponent } from './components/product-list-buy/product-list-buy.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/restaurant',
  pathMatch: 'full'
},
//RUTAS PRODUCTO
{
  path: 'restaurant/list',
  component: ProductListComponent
},
{
  path: 'restaurant/list-buy',
  component: ProductListBuyComponent
},
{
  path: 'restaurant/add',
  component: ProductFormComponent
},
{
  path: 'restaurant/edit/:id',
  component: ProductFormComponent
},
//RUTAS RESTAURANTES
{
  path: 'restaurant/restaurant-list',
  component: RestaurantListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

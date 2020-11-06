import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {
  
  itemsShopCart: any;
  shopCart: any;

  constructor(private shoppingCartservice: ShoppingCartService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //Establecer la forma de crear un item para cada carrito de compras
    this.showItems('1');
  }

  showItems(idShopCart: string){
    this.shoppingCartservice.showCart(idShopCart).subscribe(
      (res:any) => { console.log(res),
        this.itemsShopCart = res.data[0].shopping_cart.items;
        this.shopCart = res.data[0].shopping_cart;
      },
      err => console.log(err)
    )
  }

  addItem(){
    this.shoppingCartservice.addItem().subscribe(
      (res:any) => { console.log(res)        
      },
      err => console.log(err)
    )
  }

  deleteItem(idItem: string){
    this.shoppingCartservice.deleteItem(idItem).subscribe(
      (res:any) => { console.log(res)        
      },
      err => console.log(err)
    )
  }
}

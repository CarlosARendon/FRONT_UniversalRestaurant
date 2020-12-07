import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillService } from 'src/app/services/bill.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {
  
  shoppingCart: any = {
    name: '',
    address: '',
    phone: '',
    payment: '',
    shopCartId: '1' 
  }

  itemsShopCart: any;
  shopCart: any;

  constructor(private shoppingCartservice: ShoppingCartService, private activatedRoute: ActivatedRoute, private billService: BillService) { }

  ngOnInit(): void {
    //Establecer la forma de crear un id para cada carrito de compras
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

  deleteItem(idItem: string){
    this.shoppingCartservice.deleteItem(idItem).subscribe(
      (res:any) => { console.log(res)        
      },
      err => console.log(err)
    )
  }

  generateBill(){
    this.billService.createBill(this.shoppingCart).subscribe(
      (res:any) => { console.log(res)        
      },
      err => console.log(err)
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  itemsShopCart: any;
  shopCart: any;
  IVA: any;
  bill:any;

  constructor(private shoppingCartservice: ShoppingCartService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.showItems('1');
    this.getBill();
  }

  showItems(idShopCart: string){
    this.shoppingCartservice.showCart(idShopCart).subscribe(
      (res:any) => { console.log(res),
        this.itemsShopCart = res.data[0].shopping_cart.items;
        this.shopCart = res.data[0].shopping_cart;
        this.IVA = (this.shopCart.total)*0.19;
      },
      err => console.log(err)
    )
}   

    getBill(){
      this.shoppingCartservice.getBill().subscribe(
        (res:any) => { console.log(res),
          this.bill = res;
          //console.log(this.bill)
        },
        err => console.log(err)
      )
    }

  }




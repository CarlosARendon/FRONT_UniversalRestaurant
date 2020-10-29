import { Component, HostBinding, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list-buy',
  templateUrl: './product-list-buy.component.html',
  styleUrls: ['./product-list-buy.component.css']
})
export class ProductListBuyComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  products: any = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      (res:any) => { console.log(res),
        this.products = res.data[0].retaurants;
      },
      err => console.log(err)
    )
  }
}

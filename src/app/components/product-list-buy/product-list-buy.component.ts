import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list-buy',
  templateUrl: './product-list-buy.component.html',
  styleUrls: ['./product-list-buy.component.css']
})
export class ProductListBuyComponent implements OnInit {

  //@HostBinding('class') classes = 'row';

  products: any = [];
  saucers: any = [];
  product: Product;

  constructor(private productService: ProductsService,private shoppingCartservice: ShoppingCartService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    var parametros = this.activatedRoute.snapshot.params;
    //console.log(parametros.id);
    this.getProducts(parametros.id);
    this.getPlates(parametros.id);
  }

  getProducts(id: string){
    this.productService.getProducts(id).subscribe(
      (res:any) => { console.log(res),
        this.products = res.data[0].products;
      },
      err => console.log(err)
    )
  };

  getPlates(id: string){
    this.productService.getPlates(id).subscribe(
      (res:any) => { console.log(res),
        this.saucers = res.data[0].saucers;
      },
      err => console.log(err)
    )
  };

  addItem(idProducto: any){
    /*this.product.id = idProducto;
    this.product.stock = 1;
    delete this.product.category_product;
    delete this.product.cost;
    delete this.product.description;
    delete this.product.images;
    delete this.product.name;*/
    let productoEnv = {
      "product_id" : idProducto,
      "quantity" : 1
    };    

    this.shoppingCartservice.addItem(productoEnv).subscribe(
      (res:any) => { console.log(res)
      },
      err => console.log(err)
    )
  };
}

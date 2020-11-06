import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute) { }

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
  }

  getPlates(id: string){
    this.productService.getPlates(id).subscribe(
      (res:any) => { console.log(res),
        this.saucers = res.data[0].saucers;
      },
      err => console.log(err)
    )
  }
}

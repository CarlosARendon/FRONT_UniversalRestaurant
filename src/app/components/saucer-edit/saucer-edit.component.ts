import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-saucer-edit',
  templateUrl: './saucer-edit.component.html',
  styleUrls: ['./saucer-edit.component.css']
})
export class SaucerEditComponent implements OnInit {
  products: any = [];
  saucer: any = [];
  saucerProducts: any = [];
  constructor(private productService: ProductsService, private shoppingCartservice: ShoppingCartService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    var idProducto = this.activatedRoute.snapshot.params;
    //cadena completa de la URl para obtener el idRestaurante
    var parametros = this.activatedRoute.snapshot.url.join('');
    //obtengo el id del restaurante
    var idRestaurante = parametros.substr(21,1);
    console.log(idProducto.id, idRestaurante);

    this.getProducts(idRestaurante);
    this.getProduct(idRestaurante,idProducto.id);
  }

  getProduct(idRest, idProd){
    this.productService.getPlate(idRest, idProd).subscribe(
      (res:any) => { console.log(res),
        this.saucer = res.data[0].saucer;
        this.saucerProducts = res.data[0].saucer.products_defaults;
      },
      err => console.log(err)
    )
  };

  getProducts(id: string){
    this.productService.getProducts(id).subscribe(
      (res:any) => { console.log(res),
        this.products = res.data[0].products;
      },
      err => console.log(err)
    )
  };

}

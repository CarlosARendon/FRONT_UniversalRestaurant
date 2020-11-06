import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  //Para la previsualizacion
  product: Product = {
    id: '',
    name: '',
    description: '',
    stock: 0,
    images: [],
    category_product: []    
  }
  
  //variable para validar si estoy guardando o editando
  edit: boolean = false;

  constructor(private productService: ProductsService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //obtengo los datos del producto a editar
    //con esta constante guardo los datos que vienen en la ruta,
    //en este caso el ID del prodcuto a editar
    const parametros = this.activatedRoute.snapshot.params;

    //Si al iniciar el componente viene con parametros implica que va a editarse un producto
   /* if (parametros.id) {
      //obtengo el producto con el id del parametro
      this.productService.getProduct(parametros.id).subscribe(
        //guardo el resultado en el objeto producto
        res => {
          this.product = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    } */
  }

  saveNewProduct(){
    delete this.product.id;
    //delete this.product.created_at;

    this.productService.saveProduct(this.product).subscribe(
      res => {
        console.log(res);
        //Verificar como enviar el id del restaurante de nuevo
        this.router.navigate(['/restaurant/list/',this.product.id]);
      },
      err => console.log(err)
    )
  }
  
  /*updateProduct(){
    delete this.product.created_at;
    //console.log(this.game);
    this.productService.updateProduct(this.product.id, this.product)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/restaurant/list/',this.product.id]);
      },
      err => console.log(err)
    )
  }*/

}

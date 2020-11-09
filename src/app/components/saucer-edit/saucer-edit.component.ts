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
  categories:any =[];
  selectedOptions:any=[];
  defaultProducts:any=[];

  constructor(private productService: ProductsService, private shoppingCartservice: ShoppingCartService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //cadena completa de la URl para obtener el idRestaurante
    var parametros = this.activatedRoute.snapshot.url.join('');
    //obtengo el id del restaurante
    var idRestaurante = parametros.substr(21,1);
    this.getProducts(idRestaurante);

  }
  ngAfterViewInit(){



  }
  getProducts(idRest: string){

    this.productService.getProducts(idRest).subscribe(
      (res:any) => { 
        console.log(res),
        this.products = res.data[0].products;
        let idProducto =this.activatedRoute.snapshot.params;
        this.productService.getPlate(idRest, idProducto.id).subscribe(
          (res:any) => { 
            this.saucer = res.data[0].saucer;
            this.saucerProducts = this.products;
            this.defaultProducts= res.data[0].saucer.products_defaults; 
            let differentCategories:any=[];
            for(let i=0;i< this.saucerProducts.length;i++){
              if(!differentCategories.includes(this.saucerProducts[i].category_product.id)){
                differentCategories.push(this.saucerProducts[i].category_product.id);
              }
            }
            for(let i=0;i<differentCategories.length;i++){
              let vecCategory:any=[];
              for(let j=0;j< this.saucerProducts.length;j++){
                if(this.saucerProducts[j].category_product.id == differentCategories[i]){
                  vecCategory.push(this.saucerProducts[j]);
                }
              }
              if(vecCategory.length>0) this.categories.push(vecCategory);
                
            }
            
          },
          err => console.log(err)
        )
      },
      err => console.log(err)
    )
  };

  storeNewConfiguration(){
    if(this.selectedOptions.length==0){
      alert("Debes cambiar algun ingrediente")
      return;
    }
    var parametros = this.activatedRoute.snapshot.url.join('');
    var idRestaurante = parametros.substr(21,1);


    this.productService.addSaucer(idRestaurante,this.selectedOptions).subscribe(
      (res:any) => { 
        //alert(JSON.stringify(res))
        alert(JSON.stringify(this.selectedOptions));

        for(let i=0; this.selectedOptions.length;i++){
          this.shoppingCartservice.addItem(this.selectedOptions[i].product).subscribe((rta:any)=>
          {
            console.log(JSON.stringify(rta));
          }
          );
        }
        alert("El plato fue agregado Correctamente al carrito de compras")
      },
      err => console.log(err)
    )
    
  }

  changeInSelect(product:any,categorySelect:any){
      let tempArray:any=[];
      if(!this.isproductAlreadySelected(product,this.selectedOptions)){
        this.selectedOptions.push({"category":categorySelect,"product":product});
        let optionSelected=document.getElementById('select'+categorySelect+'_option'+product);
        optionSelected.style.backgroundColor="rgb(37,122,253)"
      }else{
        //Si lo seleciona de nuevo lo quitamos
        for(let i=0; i<this.selectedOptions.length;i++){
          if(product == this.selectedOptions[i].product) continue;
          tempArray.push(this.selectedOptions[i]);
        }
        let optionSelected=document.getElementById('select'+categorySelect+'_option'+product);
        optionSelected.style.backgroundColor="transparent";
        this.selectedOptions=tempArray;

      }    
      //alert(JSON.stringify(this.selectedOptions));
  }

  isproductAlreadySelected(product:any,vecProducts:any):Boolean{
    for(let i=0;i<vecProducts.length;i++){
      if(vecProducts[i].product == product){
        return true;
      }
    }
    return false;
    
  }

  

}

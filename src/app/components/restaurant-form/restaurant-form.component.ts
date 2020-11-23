import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {
  
  restaurant: any = {
    name: '',
    description: '',
    address: '',
    phone: '',
    images: '' ,
    domain: '',
  }

  edit: boolean = false;

  constructor(private restaurantsService: RestaurantsService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params.id) {
      this.restaurantsService.getRestaurant(params.id)
      .subscribe(
        res => {
          console.log(res)
          this.restaurant = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
  }

  saveNewRestaurant (){
    this.restaurantsService.saveRestaurant(this.restaurant)
      .subscribe(res => { console.log(res) }, err => console.log(err));
  }

  updateRestaurant (){
    
  }
}

import { Component, HostBinding, OnInit } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  restaurants: any = [];

  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit(): void {
    this.getRestaurants();
  }
  
  getRestaurants(){
    this.restaurantService.getRestaurants().subscribe(
      (res:any) => { console.log(res),
        this.restaurants = res.data[0].retaurants;
      },
      err => console.log(err)
    )
  }

}

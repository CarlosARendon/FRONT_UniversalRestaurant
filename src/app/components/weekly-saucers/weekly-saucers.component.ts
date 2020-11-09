import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { WeeklySaucerService } from 'src/app/services/weekly-saucer.service';

@Component({
  selector: 'app-weekly-saucers',
  templateUrl: './weekly-saucers.component.html',
  styleUrls: ['./weekly-saucers.component.css']
})
export class WeeklySaucersComponent implements OnInit {

  weeklyDates: any = [];
  idSaucers: any = [];
  saucers: any = [];
  idRestaurant: any;

  constructor(private serviceWeeklySaucer: WeeklySaucerService, private activatedRoute: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    var idRestaurante = this.activatedRoute.snapshot.params;
    this.idRestaurant = idRestaurante.id;
    this.getWeeklyDates();

    this.getDailySaucers(idRestaurante.id, this.weeklyDates);

  }

  getDailySaucers(idRest: string, fecha: any) {
    for (let index = 0; index < fecha.length; index++) {
      this.serviceWeeklySaucer.getDailySpecial(idRest, fecha[index]).subscribe(
        (res: any) => {
          this.idSaucers[index] = res.data[0].weekly_saucer[0].saucer_id,
            console.log(this.idRestaurant)
          this.getProduct(idRest, this.idSaucers[index]);
        },
        err => console.log(err)
      )
    }
  };

  getWeeklyDates() {
    var curr = new Date;
    //Obtengo el primer día de la semana (en js domingo es el primero entonces le sumo 1)
    var first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
    var firstday;

    for (let index = 0; index < 5; index++) {
      firstday = new Date(curr.setDate(first));
      let date = firstday.getFullYear() + "-" + (firstday.getMonth() + 1) + "-" + firstday.getDate();
      this.weeklyDates[index] = date;
      first++;
    }
    console.log(this.weeklyDates);
  }

  getProduct(idRest: string, idsProd: any) {
    this.productService.getPlate(idRest, idsProd).subscribe(
      (res: any) => {
        this.saucers.push(res.data[0].saucer),
          console.log(res)
      },
      err => console.log(err)
    )

  };

}

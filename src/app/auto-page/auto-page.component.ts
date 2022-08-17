import {Component, OnInit} from '@angular/core';
import {CarInterface} from "../interfaces/car.interface";
import {CarService} from "../services/car.service";
import {AutoDetailComponent} from "../auto-detail/auto-detail.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-auto-page',
  templateUrl: './auto-page.component.html',
  styleUrls: ['./auto-page.component.css']
})
export class AutoPageComponent implements OnInit {

  cars: any = [];
  id: any = this.autoDetailComponent.car.id;

  constructor(private carService: CarService,
              private autoDetailComponent: AutoDetailComponent,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe((data: CarInterface) => {
      console.log(data);
      this.cars = data;
    })
  }
}

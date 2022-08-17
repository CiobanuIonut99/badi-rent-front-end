import {Component, OnInit} from '@angular/core';
import {CarInterface} from "../interfaces/car.interface";
import {CarService} from "../services/car.service";

@Component({
  selector: 'app-auto-page',
  templateUrl: './auto-page.component.html',
  styleUrls: ['./auto-page.component.css']
})
export class AutoPageComponent implements OnInit {

  cars: any = [];

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe((data: CarInterface) => {
      console.log(data);
      this.cars = data;
    })
  }
}

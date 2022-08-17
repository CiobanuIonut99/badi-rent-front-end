import {Component, OnInit} from '@angular/core';
import {CarService} from "../services/car.service";
import {Router} from "@angular/router";
import {CarInterface} from "../interfaces/car.interface";

@Component({
  selector: 'app-auto-page',
  templateUrl: './auto-page.component.html',
  styleUrls: ['./auto-page.component.css']
})
export class AutoPageComponent implements OnInit {

  cars: any = [];

  constructor(private carService: CarService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe((data: CarInterface) => {
      console.log(data);
      this.cars = data;
    })
  }
}

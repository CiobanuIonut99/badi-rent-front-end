import {Component, OnInit} from '@angular/core';
import {CarService} from "../services/car.service";
import {CarInterface} from "../interfaces/car.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-auto-detail',
  templateUrl: './auto-detail.component.html',
  styleUrls: ['./auto-detail.component.css']
})
export class AutoDetailComponent implements OnInit {

  car: any = [];

  constructor(private carService: CarService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('asta e id din auto detail' + id)
    this.carService.getCar(id).subscribe((
      data: CarInterface
    ) => {
      console.log(data)
      this.car = data;
    })

  }


}

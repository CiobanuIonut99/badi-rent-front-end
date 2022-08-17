import {Component, OnInit} from '@angular/core';
import {AutoPageComponent} from "../auto-page/auto-page.component";

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {


  cars: any = [];

  constructor(private autoPageComponent: AutoPageComponent) {
  }

  ngOnInit(): void {
    this.cars = this.autoPageComponent.cars;
  }

}

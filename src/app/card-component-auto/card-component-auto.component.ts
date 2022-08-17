import {Component, OnInit} from '@angular/core';
import {AutoPageComponent} from "../auto-page/auto-page.component";

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component-auto.component.html',
  styleUrls: ['./card-component-auto.component.css']
})
export class CardComponentAutoComponent implements OnInit {

  cars: any = this.autoPageComponent.cars;

  constructor(private autoPageComponent: AutoPageComponent) {
  }

  ngOnInit(): void {

  }

}

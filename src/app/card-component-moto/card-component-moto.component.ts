import { Component, OnInit } from '@angular/core';
import {MotoPageComponent} from "../moto-page/moto-page.component";

@Component({
  selector: 'app-card-component-moto',
  templateUrl: './card-component-moto.component.html',
  styleUrls: ['./card-component-moto.component.css']
})
export class CardComponentMotoComponent implements OnInit {

  motos: any = this.motoPageComponent.motos;

  constructor(private motoPageComponent: MotoPageComponent) { }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import {AtvPageComponent} from "../atv-page/atv-page.component";

@Component({
  selector: 'app-card-component-atv',
  templateUrl: './card-component-atv.component.html',
  styleUrls: ['./card-component-atv.component.css']
})
export class CardComponentAtvComponent implements OnInit {

  atvs: any = this.atvPageComponent.atvs;

  constructor(private atvPageComponent: AtvPageComponent) {
  }

  ngOnInit(): void {

  }
}

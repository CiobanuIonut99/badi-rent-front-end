import { Component, OnInit } from '@angular/core';
import {MotoInterface} from "../interfaces/moto.interface";
import {MotoService} from "../services/moto.service.";

@Component({
  selector: 'app-moto-page',
  templateUrl: './moto-page.component.html',
  styleUrls: ['./moto-page.component.css']
})
export class MotoPageComponent implements OnInit {

  motos: any = [];

  constructor(private motoService: MotoService) { }

  ngOnInit(): void {
    this.motoService.getMotos().subscribe((data: MotoInterface) => {
      console.log(data);
      this.motos = data;
    })
  }
}

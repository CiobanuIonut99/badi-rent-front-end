import {Component, OnInit} from '@angular/core';
import {ATVInterface} from "../interfaces/atv.interface";
import {ATVService} from "../services/atv.service";

@Component({
  selector: 'app-atv-page',
  templateUrl: './atv-page.component.html',
  styleUrls: ['./atv-page.component.css']
})
export class AtvPageComponent implements OnInit {

  atvs: any = [];

  constructor(private atvService: ATVService) {
  }

  ngOnInit(): void {
    this.atvService.getAtvs().subscribe((data: ATVInterface) => {
      console.log(data);
      this.atvs = data;
    })
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MotoService} from "../services/moto.service.";
import {MotoInterface} from "../interfaces/moto.interface";

@Component({
  selector: 'app-moto-detail',
  templateUrl: './moto-detail.component.html',
  styleUrls: ['./moto-detail.component.css']
})
export class MotoDetailComponent implements OnInit {

  moto: any = [];

  constructor(private motoService: MotoService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('asta e id din auto detail' + id)
    this.motoService.getMoto(id).subscribe((
      data: MotoInterface
    ) => {
      console.log(data)
      this.moto = data;
    })
  }
}

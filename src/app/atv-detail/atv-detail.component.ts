import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ATVService} from "../services/atv.service";
import {ATVInterface} from "../interfaces/atv.interface";

@Component({
  selector: 'app-atv-detail',
  templateUrl: './atv-detail.component.html',
  styleUrls: ['./atv-detail.component.css']
})
export class AtvDetailComponent implements OnInit {

  atv: any = [];

  constructor(private atvService: ATVService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('asta e id din auto detail' + id)
    this.atvService.getAtv(id).subscribe((
      data: ATVInterface
    ) => {
      console.log(data)
      this.atv = data;
    })
  }

}

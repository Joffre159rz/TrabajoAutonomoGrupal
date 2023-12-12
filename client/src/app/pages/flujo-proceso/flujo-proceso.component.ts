import { Component, OnInit } from '@angular/core';
import { FlujoProcesoService } from 'src/app/core/services/flujo-proceso.service';

@Component({
  selector: 'app-flujo-proceso',
  templateUrl: './flujo-proceso.component.html',
  styleUrls: ['./flujo-proceso.component.css']
})
export class FlujoProcesoComponent implements OnInit {
  flujoProcesos: Array<any> = [];
  constructor(private _flujoProcesoService: FlujoProcesoService) { }

  ngOnInit(): void {
    this._flujoProcesoService.getAllFlujoProceso().subscribe((data) => {
      this.flujoProcesos = data;
      console.log(data);
      
    })
  }

}

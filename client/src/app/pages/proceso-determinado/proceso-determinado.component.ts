import { Component, OnInit } from '@angular/core';
import { ProcesoDeterminadoService } from 'src/app/core/services/proceso-determinado.service';

@Component({
  selector: 'app-proceso-determinado',
  templateUrl: './proceso-determinado.component.html',
  styleUrls: ['./proceso-determinado.component.css']
})
export class ProcesoDeterminadoComponent implements OnInit {
  procesosDeterminados: Array<any> = [];
  constructor(private _procesoDeterminadoService: ProcesoDeterminadoService) { }

  ngOnInit(): void {
    this._procesoDeterminadoService.getAllProcesosDeterminados().subscribe((data) => {
      // Aquí puedes manejar los datos recibidos en la respuesta
      this.procesosDeterminados=data
      console.log(data);
    });
  }
}

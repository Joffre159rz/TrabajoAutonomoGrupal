import { Component, OnInit } from '@angular/core';
import { SolicitudBajaService } from 'src/app/core/services/solicitud-baja.service';

@Component({
  selector: 'app-solicitud-baja',
  templateUrl: './solicitud-baja.component.html',
  styleUrls: ['./solicitud-baja.component.css']
})
export class SolicitudBajaComponent implements OnInit {
  solicitudesBajas: Array<any> = [];
  constructor(private _solicitudBajaService: SolicitudBajaService) { }

  ngOnInit(): void {
    this._solicitudBajaService.getAllSolicitudesBajas().subscribe((data) => {
      // Aquí puedes manejar los datos recibidos en la respuesta
      this.solicitudesBajas=data
      console.log(data);
    });
  }

}

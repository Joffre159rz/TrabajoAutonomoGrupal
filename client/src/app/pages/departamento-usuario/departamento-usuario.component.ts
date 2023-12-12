import { Component, OnInit } from '@angular/core';
import { DepartamentoUsuarioService } from 'src/app/core/services/departamento-usuario.service'
@Component({
  selector: 'app-departamento-usuario',
  templateUrl: './departamento-usuario.component.html',
  styleUrls: ['./departamento-usuario.component.css']
})
export class DepartamentoUsuarioComponent implements OnInit {
  departamentoUsuarios: Array<any> = [];
  constructor( private _departamentoUsuarioService: DepartamentoUsuarioService ) { }

  ngOnInit(): void {
    this._departamentoUsuarioService.getAllDepartamentoUsuario().subscribe((data) => {
      this.departamentoUsuarios = data;
      console.log(data);
      
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { DocumentoService } from 'src/app/core/services/documento.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {
  documentos: Array<any> = [];
  constructor(private _documentoService: DocumentoService) { }

  ngOnInit(): void {
    this._documentoService.getAllDocumento().subscribe((data) => {
      this.documentos = data;
      console.log(data);
      
    })
  }

}

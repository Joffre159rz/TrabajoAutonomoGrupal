import { Component } from '@angular/core';
import { ScriptUploadService } from './core/services/script-upload.service';
import { io } from 'socket.io-client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private socket: any;

  constructor(private _uploadScriptService: ScriptUploadService) {
    this.socket = io('http://localhost:3000');
    this._uploadScriptService.Upload(['script']);
  }
  ngOnInit() {
    this.socket.on('userUpdated', (data: any) => {
      // Aquí puedes manejar la lógica para mostrar la notificación en el frontend
    });
  }
  title = 'client';
}

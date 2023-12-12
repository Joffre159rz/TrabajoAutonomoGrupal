import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoUsuarioService {
  private url: string;

  constructor(private _http: HttpClient) {
    this.url = environment.url;
  }

  getAllDepartamentoUsuario(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'departamento-usuario/', { headers: headers });
  }
}

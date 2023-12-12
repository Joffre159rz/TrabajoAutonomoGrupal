import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlujoProcesoService {
  private url: string;

  constructor(private _http: HttpClient) {
    this.url = environment.url;
  }

  getAllFlujoProceso(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'flujo-proceso/', { headers: headers });
  }
}

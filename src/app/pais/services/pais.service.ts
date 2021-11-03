import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetallePais } from '../interfaces/detallepais.interface';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {

  private url: string = 'https://restcountries.com/v3/name/';

  private capitalUrl:string = "https://restcountries.com/v3/capital/"

  private codigoUrl:string = "https://restcountries.com/v2/alpha/"

  private codigoRegion:string = "https://restcountries.com/v3/region/"

  getParams()
  {
    return new HttpParams()
    .set('fields','name,capital,population,cca2,flags')
  }



  constructor(private http: HttpClient) {}

  getpais(name: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.url}/${name}`);
  }

  getCapital(name: string):Observable<Pais[]>
  {
    return  this.http.get<Pais[]>(`${this.capitalUrl}/${name}`)
  }

  getDetallePais(id:string):Observable<DetallePais>
  {

    return this.http.get<DetallePais>(`${this.codigoUrl}/${id}`)
  }

  getRegion(codigo:string):Observable<Pais[]>
  {
    return this.http.get<Pais[]>(`${this.codigoRegion}/${codigo}`, {params:this.getParams()})
  }
}

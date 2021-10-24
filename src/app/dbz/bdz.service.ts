import { Injectable } from '@angular/core';
import { Personaje } from './Interfaces/dbzinterface';

@Injectable({
  providedIn: 'root'
})
export class BdzService {

  private _personajes: Personaje[]=[
    {
      nombre:'Goku',
      poder:9000
    },
    {
      nombre:'Vegeta',
      poder:19000
    }
  ];

  get personajes():Personaje[]
  {
    return [...this._personajes]
  }

  constructor() { }

  agregarpersonaje(personaje:Personaje)
  {
    this._personajes.push(personaje)
  }

}

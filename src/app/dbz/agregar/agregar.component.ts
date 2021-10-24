import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BdzService } from '../bdz.service';

import { Personaje } from '../Interfaces/dbzinterface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  
  // @Input() campos: Personaje = {
  //   nombre: '',
  //   poder: 0,
  // };

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  campos: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(private dbzService: BdzService) {}

  agregar()
  {
    if (this.campos.nombre.trim().length === 0) {
      return;

    } else {
      //this.onNuevoPersonaje.emit(this.campos);
      this.dbzService.agregarpersonaje(this.campos);

      this.campos = {
        nombre: '',
        poder: 0,
      };
    }
  }
}

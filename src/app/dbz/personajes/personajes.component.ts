import { Component, Input } from '@angular/core';
import { BdzService } from '../bdz.service';
import { Personaje } from '../Interfaces/dbzinterface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  //@Input() personajes:Personaje[] =[]

  get personajes()
  {
    return this.dbzService.personajes
  }

  constructor(private dbzService:BdzService)
  {

  }

}

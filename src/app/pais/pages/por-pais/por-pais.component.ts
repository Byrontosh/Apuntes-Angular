import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  existeError: boolean = false;
  existeErrorVacios: boolean = false;
  paises:Pais[]=[]
  placeholder = 'Buscar por país';

  constructor(private srvPais: PaisService) {

  }

  ngOnInit(): void {}


  buscar(termino:string) {
    this.termino = termino
    this.existeError=false
    if (this.termino.trim().length === 0) {
      this.existeErrorVacios=true
      return;
    }
    this.srvPais.getpais(this.termino).subscribe(
      (res) => {
        this.paises = res;
        this.existeErrorVacios=false
      },
      (err) => {

        this.existeError = true;
        this.existeErrorVacios=false

      }
    );
  }


  buscadorDebouce(termino:string)
  {
    this.existeError= false
    console.log(termino);
  }
}

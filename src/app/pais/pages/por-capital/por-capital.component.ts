import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  existeError: boolean = false;
  existeErrorVacios: boolean = false;
  paises:Pais[]=[]
  placeholder = 'Buscar por capital';

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
    this.srvPais.getCapital(this.termino).subscribe(
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


}

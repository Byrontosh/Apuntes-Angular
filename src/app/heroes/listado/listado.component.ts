import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Thor','Ironman','Hulk','Antman'];
  heroeEliminado:string='';
  estado:boolean=false;
  estadom:boolean=false;
  mensaje:string="No existen más héroes"

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroeUltimo(){
    if(this.heroes.length>0)
    {
      this.heroeEliminado = this.heroes.pop() || '';
      this.estado = true;
      if(this.heroes.length==0)
      {
        this.estadom=true
      }
    }
  }
  borrarHeroeInicio(){
    if(this.heroes.length>0)
    {
      this.heroeEliminado = this.heroes.shift() || '';
      this.estado=true;
      if(this.heroes.length==0)
      {
        this.estadom=true
      }
    }
  }


}

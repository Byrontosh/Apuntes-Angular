import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {


  title: string = 'Aplicación de contador';
  numero: number = 0;
  base: number = 5;

  acumular (valor: number)
  {
      this.numero += valor
      if(this.numero<0)
      {
        this.numero=0
      }
  }

}

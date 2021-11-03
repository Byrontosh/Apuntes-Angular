import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent implements OnInit {
  regiones:string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  regionActiva: string = '';

  paises: Pais[] = [];

  existeError: boolean = false;

  constructor(private srvPais: PaisService) {}

  ngOnInit(): void {}

  getEstiloButton(region: string) {
    return this.regionActiva === region
      ? 'btn btn-primary mx-2'
      : 'btn btn-outline-primary mx-2';
  }

  activarRegion(data: string) {

    if(data===this.regionActiva)
    {
      return ;
    }
    this.regionActiva = data;
    this.paises =[]
    this.srvPais.getRegion(data).subscribe((res) => {
      console.log(res);
      this.paises = res;
    });
  }
}

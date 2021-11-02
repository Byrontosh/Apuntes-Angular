import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import {switchMap} from "rxjs/operators";
import { Pais } from '../../interfaces/pais.interface';
import { DetallePais } from '../../interfaces/detallepais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!:DetallePais;


  constructor(private route:ActivatedRoute, private srvPais: PaisService) { }

  ngOnInit(): void
  {
    this.route.params.subscribe(data=>{

      this.srvPais.getDetallePais(data.id).subscribe(
        pais=>{
          console.log(pais);
          this.pais = pais
        }
      )
    })

    // this.route.params
    // .pipe(
    //   switchMap((data)=> this.srvPais.getDetallePais(data.id))
    // )
    // .subscribe(data=>{
    //   console.log(data);
    // })
  }

}

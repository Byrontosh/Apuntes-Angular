import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroreComponent } from './herore/herore.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [
    HeroreComponent,
    ListadoComponent
  ],
  exports:[
    HeroreComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }

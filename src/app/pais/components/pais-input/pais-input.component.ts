import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Input() placeholder:string = '';

  @Output() onNuevoPais:EventEmitter<string> = new EventEmitter();

  @Output() onNuevoPaisDebounce:EventEmitter<string> = new EventEmitter();
  debouncer:Subject<string> = new Subject();

  termino: string='';

  constructor() { }

  ngOnInit(): void
  {
    this.debouncer

    .pipe(debounceTime(300))

    .subscribe(data=>{
      this.onNuevoPaisDebounce.emit(data)
    })
  }

  buscar()
  {
    this.onNuevoPais.emit(this.termino)
  }

  tecla()
  {
    this.debouncer.next(this.termino)
  }


}

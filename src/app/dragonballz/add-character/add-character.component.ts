import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../data-types';
import { DragonballzService } from '../services/dragonballz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {
  // @Output() onAddNew: EventEmitter<Personaje> = new EventEmitter()

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbService: DragonballzService){}

  submitHandler() {
    if (!this.nuevo.nombre.trim())
      return

    // this.onAddNew.emit(this.nuevo)
    this.dbService.addCharacter(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

  cambiarPoder(e: any) {
    this.nuevo.poder = +e.target.value
  }

}

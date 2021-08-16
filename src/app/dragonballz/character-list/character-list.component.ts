import { Component, Input } from '@angular/core';
import { Personaje } from '../data-types'
import { DragonballzService } from '../services/dragonballz.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent  {

  constructor(private dbService: DragonballzService){}

  get personajes(){
    return this.dbService.personajes
  }
  // @Input() data: Personaje[] = []
}

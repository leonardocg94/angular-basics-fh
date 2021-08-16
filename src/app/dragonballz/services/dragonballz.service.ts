import { Injectable } from "@angular/core";
import { Personaje } from "../data-types";

@Injectable()
export class DragonballzService {
  private _personajes: Personaje[] = [
    {nombre: "Goku", poder: 15000},
    {nombre: "Veggeta", poder: 8500}
  ]

  get personajes(){
    return [...this._personajes]
  }

  addCharacter(character: Personaje){
    this._personajes.push(character)
  }

}

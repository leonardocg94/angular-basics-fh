import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroComponent {
  name: string = 'Ironman'
  age: number = 45

  getName(): string {
    return `${this.name} - ${this.age}`
  }

  get loweName(): string {
    return this.name.toLowerCase()
  }

  changeName(): void {
    this.name = "Spiderman"
  }

  changeEdad(): void {
    this.age = 30
  }
}

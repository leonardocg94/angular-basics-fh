import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})
export class ContadorComponent {
  num: number = 10
  base: number = 5

  changeNum(val: number){
    this.num += val
  }
}

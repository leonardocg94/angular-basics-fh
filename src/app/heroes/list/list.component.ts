import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  heroes: string[] = ['ironman', 'spiderman', 'goku', 'saitama', 'Morganoid']
  deletedHero: string = ''

  deleteHero(){
    this.deletedHero = this.heroes.pop() || ''
  }

}

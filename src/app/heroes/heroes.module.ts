import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { HeroComponent } from './heroe/heroe.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {}

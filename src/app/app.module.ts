import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadoresModule } from './contadores/contadores.module';
import { DragonballzModule } from './dragonballz/dragonballz.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadoresModule,
    DragonballzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

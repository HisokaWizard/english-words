import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { MenuComponent } from './components/menu/menu.component';
import { WordsComponent } from './components/words/words.component';

import { AppRoutingModule } from './app-routing.modules';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    WordsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

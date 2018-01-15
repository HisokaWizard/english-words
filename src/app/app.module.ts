import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { MenuComponent } from './components/menu/menu.component';
import { WordsComponent } from './components/words/words.component';

import { AppRoutingModule } from './app-routing.modules';

import { AppComponent } from './app.component';

import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderModule
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    WordsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

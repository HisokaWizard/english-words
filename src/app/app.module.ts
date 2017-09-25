import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

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
    WordsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

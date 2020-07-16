import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PipesDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

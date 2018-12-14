import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,ImageSliderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

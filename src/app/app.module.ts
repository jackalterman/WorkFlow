import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { TextComponent } from './text/text.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    DateComponent
    
  ],
  imports: [
    BrowserModule, AgGridModule.withComponents([]), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

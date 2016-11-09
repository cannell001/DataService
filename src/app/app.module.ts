import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataService } from '../providers/dataservice.service';
import { MyItemComponent } from './my-item/my-item.component';
import { Configuration } from './app.constants';

@NgModule({
  declarations: [
    AppComponent,
    MyItemComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }

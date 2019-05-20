import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '../app/components/material.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule, // TODO remove after componentizing
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

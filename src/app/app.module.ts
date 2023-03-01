import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormalTemplateComponent } from './components/templates/formal/formal-template/formal-template.component';

@NgModule({
  declarations: [
    AppComponent,
    FormalTemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

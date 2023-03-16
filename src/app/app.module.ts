import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormalTemplateComponent } from './components/templates/formal/formal-template/formal-template.component';
import { NgxVcardModule } from "ngx-vcard";

@NgModule({
  declarations: [
    AppComponent,
    FormalTemplateComponent
  ],
  imports: [
    BrowserModule,
    NgxVcardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

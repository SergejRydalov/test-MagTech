import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabOneComponent } from './components/tab-1/tab-one.component';
import { TabTwoComponent } from "./components/tab-2/tab-two.component";

@NgModule({
  declarations: [
    AppComponent,
    TabOneComponent,
    TabTwoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

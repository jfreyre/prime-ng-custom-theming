import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestJfrComponent } from './test-jfr/test-jfr.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TestJfrComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

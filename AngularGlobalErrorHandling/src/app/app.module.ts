import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { GlobalErrorHandler } from './globar-error.handler';
import { NGXLogger } from 'ngx-logger';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    {
      provide: NGXLogger,
      useClass: NGXLogger
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

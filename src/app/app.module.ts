import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PublicApisComponent } from './public-apis/public-apis.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicApisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PublicApisComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

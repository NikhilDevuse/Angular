import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedcommonModule } from './common/sharedcommon.module';
import { CompsModule } from './comps/comps.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CompsModule,
    AppRoutingModule,
    SharedcommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

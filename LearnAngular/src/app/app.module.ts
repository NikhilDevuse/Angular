import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngulartemplentsyntaxComponent } from './angulartemplentsyntax/angulartemplentsyntax.component';
import { BuildingcomponentsComponent } from './buildingcomponents/buildingcomponents.component';
import { ExcersicesComponent } from './excersices/excersices.component';

@NgModule({
  declarations: [			
    AppComponent,
      AngulartemplentsyntaxComponent,
      BuildingcomponentsComponent,
      ExcersicesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

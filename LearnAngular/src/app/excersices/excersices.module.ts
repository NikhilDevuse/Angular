import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcersicesComponent } from './excersices.component';
import { RouterModule } from '@angular/router';
import { excersicesRoutes } from './excersices.routing';



@NgModule({
  declarations: [
    ExcersicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(excersicesRoutes),
  ]
})
export class ExcersicesModule { }

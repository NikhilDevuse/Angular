import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngulartemplentsyntaxComponent } from './angulartemplentsyntax/angulartemplentsyntax.component';
import { BuildingcomponentsComponent } from './buildingcomponents/buildingcomponents.component';
import { RouterModule } from '@angular/router';
import { courseContentChildren } from "./course-content.routing";
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AngulartemplentsyntaxComponent,
    BuildingcomponentsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(courseContentChildren),
  ]
})
export class CourseContentModule { }

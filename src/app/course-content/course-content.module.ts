import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngulartemplentsyntaxComponent } from './angulartemplentsyntax/angulartemplentsyntax.component';
import { BuildingcomponentsComponent } from './buildingcomponents/buildingcomponents.component';
import { RouterModule } from '@angular/router';
import { courseContentChildren } from "./course-content.routing";
import { CardComponent } from './card/card.component';
import { MasteringpipesComponent } from './masteringpipes/masteringpipes.component';
import { SharedcommonModule } from '../common/sharedcommon.module';
import { DirectivesangularComponent } from './directivesangular/directivesangular.component';


@NgModule({
  declarations: [
    AngulartemplentsyntaxComponent,
    BuildingcomponentsComponent,
    CardComponent,
    MasteringpipesComponent,
    DirectivesangularComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(courseContentChildren),
    SharedcommonModule
  ],
})
export class CourseContentModule { }

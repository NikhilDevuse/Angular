import { Routes } from '@angular/router';
import { AngulartemplentsyntaxComponent } from './angulartemplentsyntax/angulartemplentsyntax.component';
import { BuildingcomponentsComponent } from './buildingcomponents/buildingcomponents.component';
import { MasteringpipesComponent } from './masteringpipes/masteringpipes.component';
import { DirectivesangularComponent } from './directivesangular/directivesangular.component';

export const courseContentChildren: Routes = [
  {
    path: 'course-content',
    children: [
      {
        path: 'angulartemplentsyntax',
        component: AngulartemplentsyntaxComponent
      },
      {
        path: 'buildingcomponents',
        component: BuildingcomponentsComponent
      },
      {
        path: 'masteringpipes',
        component: MasteringpipesComponent
      },
      {
        path: 'directivesangular',
        component: DirectivesangularComponent
      }
    ]
  }

];

//export const CourseContentRoutes = RouterModule.forChild(routes);

import { Routes } from '@angular/router';
import { AngulartemplentsyntaxComponent } from './angulartemplentsyntax/angulartemplentsyntax.component';
import { BuildingcomponentsComponent } from './buildingcomponents/buildingcomponents.component';

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
      }
    ]
  }

];

//export const CourseContentRoutes = RouterModule.forChild(routes);

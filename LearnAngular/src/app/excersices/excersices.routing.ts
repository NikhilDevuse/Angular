import { Routes } from '@angular/router';
import { ExcersicesComponent } from './excersices.component';

export const excersicesRoutes: Routes = [
  {
    path:'excersices',
    children:[
      {
        path:'excersices',
        component: ExcersicesComponent
      }
    ]
  },
];
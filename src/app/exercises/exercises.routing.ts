import { Routes } from '@angular/router';
import { TypingExercisesComponent } from './typing-exercises/typing-exercises.component';

export const exercisesRoutes: Routes = [
  {
    path:'exercises',
    children:[
      {
        path:'typing-exercises',
        component: TypingExercisesComponent
      }
    ]
  },
];
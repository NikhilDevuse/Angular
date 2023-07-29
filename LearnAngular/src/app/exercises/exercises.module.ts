import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { exercisesRoutes } from './exercises.routing';
import { TypingExercisesComponent } from './typing-exercises/typing-exercises.component';



@NgModule({
  declarations: [
    TypingExercisesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(exercisesRoutes),
  ]
})
export class ExercisesModule { }

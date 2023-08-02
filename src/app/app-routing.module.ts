import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'course-content',
    loadChildren: () => import('./course-content/course-content.module').then(m => m.CourseContentModule)
  },
  {
    path: 'exercises',
    loadChildren: () => import('./exercises/exercises.module').then(m => m.ExercisesModule)
  },
  {
    path: '',
    loadChildren: () => import('./common/sharedcommon.module').then(m => m.SharedcommonModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

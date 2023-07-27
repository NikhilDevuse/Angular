import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'course-content',
    loadChildren: () => import('./course-content/course-content.module').then(m => m.CourseContentModule)
  },
  {
    path: 'excersices',
    loadChildren: () => import('./excersices/excersices.module').then(m => m.ExcersicesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

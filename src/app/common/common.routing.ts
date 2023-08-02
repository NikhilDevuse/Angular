import { Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

export const CommonRoutes: Routes = [
  {
    path: '**',
    component: NotfoundComponent
  }
];

import { Routes } from '@angular/router';
import { CompsComponent } from './comps.component';

export const CompsRoutes: Routes = [
  {
    path: 'collections',
    loadChildren: () => import('./collections/collections-routing.module').then(m => m.CollectionsRoutingModule)
  },
  {
    path: 'elements',
    loadChildren: () => import('./elements/elements-routing.module').then(m => m.ElementsRoutingModule)
  },
  {
    path: '',
    component: CompsComponent
  }
];

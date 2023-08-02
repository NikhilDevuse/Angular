import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompsComponent } from './comps.component';
import { ElementsModule } from './elements/elements.module';
import { CollectionsModule } from './collections/collections.module';
import { RouterModule } from '@angular/router';
import { CompsRoutes } from './comps.routing';

@NgModule({
  imports: [
    CommonModule,
    ElementsModule,
    CollectionsModule,
    RouterModule.forChild(CompsRoutes),
  ],
  declarations: [CompsComponent],
  exports: [ElementsModule, CollectionsModule]
})
export class CompsModule { }

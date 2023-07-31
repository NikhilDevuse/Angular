import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompsComponent } from './comps.component';
import { ElementsModule } from './elements/elements.module';
import { CollectionsModule } from './collections/collections.module';

@NgModule({
  imports: [
    CommonModule,
    ElementsModule,
    CollectionsModule
  ],
  declarations: [CompsComponent],
  exports: [ElementsModule, CollectionsModule]
})
export class CompsModule { }

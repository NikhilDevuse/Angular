import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertPipe } from './pipes/convert.pipe';
import { ClassDirective } from './directives/class.directive';
import { TimesDirective } from './directives/times.directive';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { CommonRoutes } from './common.routing';



@NgModule({
  declarations: [ConvertPipe,
    ClassDirective,
    TimesDirective,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CommonRoutes)
  ],
  exports: [ConvertPipe, ClassDirective, TimesDirective, NotfoundComponent]
})
export class SharedcommonModule { }

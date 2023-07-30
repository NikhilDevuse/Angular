import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertPipe } from './pipes/convert.pipe';
import { ClassDirective } from './directives/class.directive';
import { TimesDirective } from './directives/times.directive';



@NgModule({
  declarations: [ConvertPipe,
    ClassDirective,
    TimesDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ConvertPipe, ClassDirective, TimesDirective]
})
export class SharedcommonModule { }

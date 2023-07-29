import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertPipe } from './pipes/convert.pipe';



@NgModule({
  declarations: [ConvertPipe],
  imports: [
    CommonModule
  ],
  exports: [ConvertPipe]
})
export class SharedcommonModule { }

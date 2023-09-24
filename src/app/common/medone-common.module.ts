import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MomentDatePipe } from './pipes';

@NgModule({
  declarations: [
    MomentDatePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    MomentDatePipe
  ]
})
export class MedOneCommonModule {}

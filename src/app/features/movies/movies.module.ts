import { NgModule } from '@angular/core';

import { MoviesListComponent } from './components';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MoviesListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MoviesListComponent
  ]
})
export class MoviesModule {}

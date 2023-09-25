import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  MoviesListComponent,
  MovieDetailDialogComponent,
  CreateMovieDialogComponent
} from './components';
import { routes } from './routes';

import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MedOneCommonModule } from 'src/app/common/medone-common.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieDetailDialogComponent,
    CreateMovieDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MedOneCommonModule,
    ReactiveFormsModule,
    MatListModule,
    MatRippleModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MomentModule
  ]
})
export class MoviesModule {}

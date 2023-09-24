import { Routes } from '@angular/router';
import { MoviesListComponent } from './components';

export const routes: Routes = [
  { path: '', component: MoviesListComponent, data: { header: 'Movies'} }
];

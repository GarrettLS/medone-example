import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  // This isn't really needed for an app like this but I'll add it anyway to show lazy loading
  { path: 'movies', loadChildren: () => import('./features/movies/movies.module').then((m) => m.MoviesModule) },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
];

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IMovieListDto } from 'src/app/common/models';
import { MoviesService } from 'src/app/common/services';
import { MovieDetailDialogComponent } from '../movie-detail-dialog/movie-detail-dialog.component';
import { CreateMovieDialogComponent } from '../create-movie-dialog/create-movie-dialog.component';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  movies: IMovieListDto[] = [];

  constructor(
    private movieService: MoviesService,
    public dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.movieService.getAllMovies().subscribe(response => {
      this.movies = response.result ?? [];
    });
  }

  onClickMovie(movieId: number): void {
    this.dialog.open(MovieDetailDialogComponent, {
      data: movieId
    });
  }

  onClickCreateMovie(): void {
    const dialogRef = this.dialog.open(CreateMovieDialogComponent);

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.fetchMovies();
      }
    })
  }
}

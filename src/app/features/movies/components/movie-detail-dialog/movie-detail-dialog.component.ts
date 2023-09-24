import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMovieDetailDto } from 'src/app/common/models';
import { MoviesService } from 'src/app/common/services';

@Component({
  selector: 'app-movie-detail-dialog',
  templateUrl: './movie-detail-dialog.component.html',
  styleUrls: ['./movie-detail-dialog.component.scss']
})
export class MovieDetailDialogComponent implements OnInit {
  movie: IMovieDetailDto | null = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public movieId: number,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.moviesService.getMovie(this.movieId).subscribe(response => {
      this.movie = response.result;
    });
  }
}

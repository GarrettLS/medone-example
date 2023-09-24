import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IMovieCreateDto } from 'src/app/common/models';
import { IActorListDto } from 'src/app/common/models/actors';
import { ActorsService, MoviesService } from 'src/app/common/services';
import { SnackBarService } from 'src/app/core/services';

@Component({
  selector: 'app-create-movie-dialog',
  templateUrl: './create-movie-dialog.component.html',
  styleUrls: ['./create-movie-dialog.component.scss']
})
export class CreateMovieDialogComponent implements OnInit {
  createMovieForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(70)]),
    synopsis: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    releaseDate: new FormControl('', [Validators.required]),
    actorIds: new FormControl([])
  });
  
  actors: IActorListDto[] = [];

  constructor(
    public dialogRef: MatDialogRef<CreateMovieDialogComponent>,
    private actorsService: ActorsService,
    private moviesService: MoviesService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.actorsService.getAllActors().subscribe(response => {
      this.actors = response.result ?? [];
    });
  }

  onClickCreateMovie(): void {
    if (this.createMovieForm.valid) {
      const movieToCreate = this.createMovieForm.getRawValue() as IMovieCreateDto;
      this.moviesService.createMovie(movieToCreate)
        .subscribe(() => {
          this.snackBarService.sendInfo('Movie has been successfully added.', true);
          this.dialogRef.close(true);
        });
    }
  }
}

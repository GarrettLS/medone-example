import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMovieDialogComponent } from './create-movie-dialog.component';

describe('CreateMovieDialogComponent', () => {
  let component: CreateMovieDialogComponent;
  let fixture: ComponentFixture<CreateMovieDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMovieDialogComponent]
    });
    fixture = TestBed.createComponent(CreateMovieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

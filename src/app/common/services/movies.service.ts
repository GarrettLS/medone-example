import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Observable } from 'rxjs'
import {
  IMovieDetailDto,
  IMovieListDto,
  IMovieCreateDto,
  IResponse
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class MoviesService extends CommonService {
  constructor(private http: HttpClient) {
    const target = 'Movies';
    super(target);
  }

  public getAllMovies(): Observable<IResponse<IMovieListDto[]>> {
    return this.http.get<IResponse<IMovieListDto[]>>(this.uri);
  }

  public getMovie(movieId: number): Observable<IResponse<IMovieDetailDto>> {
    return this.http.get<IResponse<IMovieDetailDto>>(`${this.uri}/${movieId}`);
  }

  public createMovie(movie: IMovieCreateDto): Observable<IResponse<IMovieDetailDto>> {
    return this.http.post<IResponse<IMovieDetailDto>>(this.uri, movie);
  }
}
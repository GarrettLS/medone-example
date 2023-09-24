import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Observable } from 'rxjs'
import {
  IResponse
} from '../../models';
import { IActorListDto } from '../../models/actors';

@Injectable({
  providedIn: 'root'
})
export class ActorsService extends CommonService {
  constructor(private http: HttpClient) {
    const target = 'Actors';
    super(target);
  }

  public getAllActors(): Observable<IResponse<IActorListDto[]>> {
    return this.http.get<IResponse<IActorListDto[]>>(this.uri);
  }
}
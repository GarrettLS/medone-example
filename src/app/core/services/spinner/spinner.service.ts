import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private _requests = 0;
  private _loading$ = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading$.asObservable();

  constructor() {}

  public add(): void {
    this._requests++;
    this.check();
  }

  public remove(): void {
    this._requests--;
    this.check();
  }

  private check(): void {
    this._loading$.next(this._requests > 0);
  }
}
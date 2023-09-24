import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MESSAGE_TYPES } from './models';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {

  }

  public sendInfo(message: string, dismiss = false): void {
    this.send(message, MESSAGE_TYPES.INFORMATION, dismiss);
  }

  public sendWarning(message: string): void {
    this.send(message, MESSAGE_TYPES.WARNING, false);
  }

  public sendError(message: string): void {
    this.send(message, MESSAGE_TYPES.ERROR, false);
  }

  private send(message: string, type: string, dismiss: boolean): void {
    this.snackBar.open(message, 'Close', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: [type],
      duration: dismiss ? 5000 : 0
    });
  }
}
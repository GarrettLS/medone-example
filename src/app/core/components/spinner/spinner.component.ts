import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { SpinnerService } from '../../services';

/**
 * Contains the Material spinner.
 * Shows and hides based on HTTP requests
 */
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  loading = false;

  constructor(
    public spinnerService: SpinnerService,
    private cdRef: ChangeDetectorRef
  ) {}
  
  ngOnInit(): void {
    this.spinnerService.loading$.subscribe(loading => {
      this.loading = loading;
      // This is used for dev mode to prevent detect changes errors
      this.cdRef.detectChanges();
    });
  }
}

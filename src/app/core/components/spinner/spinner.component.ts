import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { SpinnerService } from '../../services';

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
      this.cdRef.detectChanges();
    });
  }
}

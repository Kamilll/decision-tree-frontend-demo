import {Component, OnInit} from '@angular/core';
import {Segment} from '../segment';
import {SegmentService} from '../segment.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-segments',
  template: `
    <mat-tab-group>
      <mat-tab *ngFor="let segment of segments" [label]="segment.name">
        <ng-template matTabContent>
          <app-segment-details [segment]="segment"></app-segment-details>
        </ng-template>
      </mat-tab>
    </mat-tab-group>
  `
})
export class SegmentsComponent implements OnInit {

  segments: Segment[];
  error: any;

  constructor(private segmentService: SegmentService, private snackBar: MatSnackBar) {
  }

  openSnackbar(errorMsg: string) {
    this.snackBar.open(errorMsg, null, {duration: 2000});
  }

  ngOnInit() {
    this.getSegments();
  }

  getSegments(): void {
    this.segmentService.getSegments().subscribe(
      segments => this.segments = segments,
      (error) => {
        this.error = error;
        this.openSnackbar(error);
      });
  }
}

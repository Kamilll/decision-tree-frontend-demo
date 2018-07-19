import {Component, OnInit} from '@angular/core';
import {Segment} from '../segment';
import {SegmentService} from '../segment.service';

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

  constructor(private segmentService: SegmentService) {
  }

  ngOnInit() {
    this.getSegments();
  }

  getSegments(): void {
    this.segmentService.getSegments().subscribe(segments => this.segments = segments);
  }

}

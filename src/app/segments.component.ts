import {Component, OnInit} from '@angular/core';
import {Segment} from './segment-details/Segment';
import {SegmentService} from './segment.service';

@Component({
  selector: 'app-segments',
  template: `
    <mat-tab-group>
      <mat-tab *ngFor="let segment of segments" [label]="segment.name">
        <h2>{{segment.name}}</h2>
        <p>Super segment content that is the same for all segments</p>
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

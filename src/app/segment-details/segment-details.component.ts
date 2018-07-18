import {Component, Input, OnInit} from '@angular/core';
import {Segment} from '../Segment';

@Component({
  selector: 'app-segment-details',
  template: `
    <p>
      segment-details works!
    </p>
    <p>{{segment.decisionTree}}</p>
    <div [appGraphVis]="segment" style="height: 60vh; background-color: gray;"></div>
  `
})
export class SegmentDetailsComponent implements OnInit {

  @Input() segment: Segment;

  constructor() {
  }

  ngOnInit() {
  }
}

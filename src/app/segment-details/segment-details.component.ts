import {Component, Input, OnInit} from '@angular/core';
import {Segment} from '../segment';

@Component({
  selector: 'app-segment-details',
  template: `
    <h2>Decision tree</h2>
    <p>{{segment.decisionTree}}</p>
    <div appShowDecisionTree [segment]="segment" style="height: 60vh;"></div>
  `
})
export class SegmentDetailsComponent implements OnInit {

  @Input() segment: Segment;

  constructor() {
  }

  ngOnInit() {
  }
}

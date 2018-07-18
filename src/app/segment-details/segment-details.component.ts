import {Component, OnInit} from '@angular/core';
import {DataSet} from 'vis';

@Component({
  selector: 'app-segment-details',
  templateUrl: './segment-details.component.html',
  styleUrls: ['./segment-details.component.css']
})
export class SegmentDetailsComponent implements OnInit {

  graphData = {};

  constructor() {
  }

  ngOnInit() {
    const nodes = new DataSet([
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
    ]);

    const edges = new DataSet([
      {from: 1, to: 3},
      {from: 1, to: 2},
      {from: 2, to: 4},
      {from: 2, to: 5}
    ]);

    this.graphData[nodes] = nodes;
    this.graphData[edges] = edges;
    console.log('Loaded static data from SegmentDetailsCompo');
  }
}

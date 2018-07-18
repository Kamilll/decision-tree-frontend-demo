import {Directive, ElementRef, Input} from '@angular/core';
import * as vis from 'vis';
import {DataSet, Network} from 'vis';
import {Segment} from './Segment';

@Directive({
  selector: '[appGraphVis]'
})
export class GraphvisDirective {

  network: vis.Network;
  options = {};

  constructor(private el: ElementRef) {
  }

  @Input()
  set appGraphVis(segment: Segment) {
    console.log(`Set network for segment ${segment.name}`);

    const parsedData = vis.network.convertDot(segment.decisionTree);

    const data = {
      nodes: parsedData.nodes,
      edges: parsedData.edges
    };


    if (!this.network) {
      this.network = new Network(this.el.nativeElement, data, this.options);
    }
  }
}

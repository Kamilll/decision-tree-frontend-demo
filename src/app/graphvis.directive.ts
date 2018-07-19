import {Directive, ElementRef, Input} from '@angular/core';
import * as vis from 'vis';
import {Network} from 'vis';
import {Segment} from './segment';

const NETWORK_OPTIONS = {
  nodes: {
    shape: 'box',
    chosen: false,
    color: {
      border: '#000',
      background: '#3700B3'
    },
    font: {
      color: '#FFF'
    }
  },
  layout: {
    hierarchical: {
      enabled: true,
      direction: 'UD',
      sortMethod: 'directed'
    }
  },
  interaction: {
    zoomView: false
  }
};

@Directive({
  selector: '[appGraphVis]'
})
export class GraphvisDirective {

  private network: Network;

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
      this.network = new Network(this.el.nativeElement, data, NETWORK_OPTIONS);
    }
  }
}

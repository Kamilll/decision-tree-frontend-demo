import {Directive, ElementRef, Input} from '@angular/core';
import {DataSet, Network} from 'vis';

@Directive({
  selector: '[appGraphVis]'
})
export class GraphvisDirective {

  network;
  options = {};

  constructor(private el: ElementRef) {
  }

  @Input()
  set appGraphVis(graphData) {
    console.log('Set network');

    const nodes: DataSet = new DataSet([
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
    ]);

    const edges: DataSet = new DataSet([
      {from: 1, to: 3},
      {from: 1, to: 2},
      {from: 2, to: 4},
      {from: 2, to: 5}
    ]);

    const graphDataX = {
      nodes: nodes,
      edges: edges
    };

    if (!this.network) {
      this.network = new Network(this.el.nativeElement, graphDataX, this.options);
    }
  }
}

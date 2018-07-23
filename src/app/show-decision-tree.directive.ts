import {Directive, ElementRef, Input} from '@angular/core';
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
  edges: {
    arrows: {
      to: {
        enabled: true
      }
    },
    font: {
      align: 'top'
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
  selector: '[appShowDecisionTree]'
})
export class ShowDecisionTreeDirective {

  private network: Network;

  constructor(private el: ElementRef) {
  }

  @Input()
  set segment(segment: Segment) {
    const visInput: VisInput = this.traverseDecisionTree(segment.decisionTree);

    if (!this.network) {
      this.network = new Network(this.el.nativeElement, visInput, NETWORK_OPTIONS);
    }
  }

  private traverseDecisionTree(decisionTree: any) {
    function traverseNode(node: any, lastNodeId: number, visNodes: VisNode[], visEdges: VisEdge[]) {
      let currentNode: VisNode;
      if (node.hasOwnProperty('Decision')) {
        const trueNode: VisNode = traverseNode(node.Decision.trueNode, lastNodeId, visNodes, visEdges);
        const falseNode: VisNode = traverseNode(node.Decision.falseNode, trueNode.id, visNodes, visEdges);
        currentNode = new VisNode(node.Decision.expression, falseNode.id + 1);
        visEdges.push(
          new VisEdge(currentNode.id, trueNode.id, 'true'), // TODO Internationalization
          new VisEdge(currentNode.id, falseNode.id, 'false')); // TODO Internationalization
      } else {
        currentNode = new VisNode(node.Result.stage, lastNodeId + 1);
      }
      visNodes.push(currentNode);
      return currentNode;
    }

    const allNodes: VisNode[] = [];
    const allEdges: VisEdge[] = [];
    traverseNode(decisionTree.root, -1, allNodes, allEdges);
    return new VisInput(allEdges, allNodes);
  }
}

class VisInput {
  constructor(public edges: VisEdge[], public nodes: VisNode[]) {
  }
}

class VisEdge {
  constructor(public from: number, public to: number, public label: string) {
  }
}

class VisNode {
  constructor(public label: string, public id: number) {
  }
}

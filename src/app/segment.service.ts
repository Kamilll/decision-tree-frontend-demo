import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Segment} from './segment';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  SEGMENTS: Segment[] = [
    {
      name: 'Segment X',
      decisionTree: 'dinetwork {"Current Rating > 10" -> "Initial Rating > 13" -> "Stage 1";' +
      ' "Current Rating > 10" -> "Stage 3";' +
      ' "Initial Rating > 13" -> "Stage 2"}'
    },
    {
      name: 'Segment A', decisionTree: 'dinetwork {' +
      '"Is POCI" -> "Impaired Based On Rating" -> "Back Stop Criteria > 90" -> "Simplified Approach" -> "Stage 3";' +
      '"Is POCI" -> "Stage 3x";' +
      '"Impaired Based On Rating" -> "Stage 1";' +
      '"Back Stop Criteria > 90" -> "Stage 2y";' +
      '"Simplified Approach" -> "Stage 2x"}'
    },
    {
      name: 'Segment ABC', decisionTree: 'dinetwork {"Is POCI" -> "Significant Rating Deterior." -> "Past Back Stop Criteria" -> ' +
      '"Increased Client Monitoring" -> "Stage 2";' +
      '"Is POCI" -> "Stage 3";' +
      '"Significant Rating Deterior." -> "Stage 1";' +
      '"Past Back Stop Criteria" -> "Stage 2";' +
      '"Increased Client Monitoring" -> "Stage 2"}'
    }
  ];

  constructor() {
  }

  getSegments(): Observable<Segment[]> {
    return of(this.SEGMENTS);
  }
}

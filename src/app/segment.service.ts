import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Segment} from './Segment';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  SEGMENTS: Segment[] = [
    {name: 'Segment X', decisionTree: 'dinetwork {1 -> 1 -> 2; 2 -> 3; 2 -- 4; 2 -> 1 }'},
    {name: 'Segment A', decisionTree: 'dinetwork {1 -> 1 -> 2; 2 -> 3; 2 -- 4; 2 -> 1 }'},
    {name: 'Segment ABC', decisionTree: 'dinetwork {1 -> 1 -> 2; 2 -> 3; 2 -- 4; 2 -> 1 }'}
  ];

  constructor() {
  }

  getSegments(): Observable<Segment[]> {
    return of(this.SEGMENTS);
  }
}

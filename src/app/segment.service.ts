import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Segment} from './Segment';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  SEGMENTS: Segment[] = [
    {name: 'Segment X', decisionTree: ''},
    {name: 'Segment A', decisionTree: ''},
    {name: 'Segment ABC', decisionTree: ''}
  ];

  constructor() {
  }

  getSegments(): Observable<Segment[]> {
    return of(this.SEGMENTS);
  }
}

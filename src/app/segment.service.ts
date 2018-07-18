import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Segment} from './segment-details/Segment';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  SEGMENTS: Segment[] = [
    {name: 'Segment X'},
    {name: 'Segment A'},
    {name: 'Segment ABC'}
  ];

  constructor() {
  }

  getSegments(): Observable<Segments[]> {
    return of(this.SEGMENTS);
  }
}

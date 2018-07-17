import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  SEGMENTS: string[] = [
    'Segment X',
    'Segment A',
    'Segment ABC'
  ];

  constructor() { }

  getSegments(): Observable<string[]> {
    return of(this.SEGMENTS);
  }
}

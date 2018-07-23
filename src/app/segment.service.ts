import {Injectable} from '@angular/core';
import {EMPTY, Observable, throwError} from 'rxjs';
import {Segment} from './segment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../environments/environment';
import {catchError} from 'rxjs/operators';

const API_URL = environment.apiUrl;

const SEGMENTS: Segment[] = [
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

@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something bad happened');
    // return EMPTY;
  }

  constructor(private http: HttpClient) {
  }

  getSegments(): Observable<Segment[]> {
    return this.http.get<Segment[]>(API_URL + '/segments')
      .pipe(
        catchError(this.handleError)
      );
    // return of(this.SEGMENTS); //TODO Uncomment to get hardcoded values
  }
}

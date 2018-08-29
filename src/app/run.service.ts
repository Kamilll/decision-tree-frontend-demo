import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Run} from './run';
import {DatePipe} from '@angular/common';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class RunService {

  private _dataPipe = new DatePipe('en-UK'); // TODO Hardcoded locale

  constructor(private http: HttpClient) {
  }

  getRuns(runDate: Date): Observable<Run[]> {
    const isoRunDate = this._dataPipe.transform(runDate, 'yyyy-MM-dd');
    console.log(`Fetch runs for ${isoRunDate}`);
    return this.http.get<Run[]>(`${API_URL}/runs?reference_date=${isoRunDate}`);
  }
}

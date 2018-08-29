import {Component, OnInit} from '@angular/core';
import {RunService} from '../run.service';
import {Run} from '../run';

@Component({
  selector: 'app-runs',
  template: `
    <h2>Runs</h2>
    <mat-form-field>
      <input matInput [matDatepicker]="picker" placeholder="Choose a date" [(ngModel)]="date" (ngModelChange)="getRuns()">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
    <button mat-raised-button>Create new</button>
    <mat-list>
      <mat-list-item *ngFor="let run of runs" [routerLink]="['/runs', run.id]">
        <mat-icon mat-list-icon>{{getIcon(run.runStatus)}}</mat-icon>
        <h4 mat-line>{{run.name}}</h4>
        <p mat-line>{{run.referenceDate | date:'yyyy-MM-dd'}}</p>
      </mat-list-item>
    </mat-list>
  `,
  styles: []
})
export class RunsComponent implements OnInit {

  runs: Run[];
  date: Date = new Date();

  constructor(private runService: RunService) {
  }

  ngOnInit() {
    this.getRuns();
  }

  public getRuns() {
    this.runService.getRuns(this.date).subscribe(
      runs => this.runs = runs
    );
  }

  private getIcon(runStatus: String) {
    switch (runStatus) {
      case 'TEMPORARY': {
        return 'schedule';
      }
      case 'FINAL': {
        return 'done';
      }
      default:
        console.warn(`Unrecognized status ${runStatus}`);
        return 'feedback';
    }
  }
}


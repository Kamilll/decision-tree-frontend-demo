import {Component, OnInit} from '@angular/core';
import {RunService} from '../run.service';
import {Run} from '../run';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-runs',
  template: `
    <h2>Runs</h2>
    <mat-form-field>
      <input matInput [matDatepicker]="picker" placeholder="Choose a date" [(ngModel)]="date" (ngModelChange)="getRuns()">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
    <mat-list>
      <mat-list-item *ngFor="let run of runs"> {{run.name}}</mat-list-item>
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
}

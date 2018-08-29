import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span>Stage Calculation</span>
    </mat-toolbar>
    <div fxLayout="row">
      <div fxFlex="200px">
        <mat-nav-list>
          <h3 matSubheader>Entities</h3>
          <a mat-list-item routerLinkActive="active-link" routerLink="runs">Runs</a>
          <a mat-list-item routerLinkActive="active-link" routerLink="segments">Segments</a>
          <a mat-list-item routerLinkActive="active-link" routerLink="positions">Positions</a>
          <h3 matSubheader>Trends</h3>
          <a mat-list-item routerLinkActive="active-link" routerLink="reports">Reports</a>
        </mat-nav-list>
      </div>
      <div fxFlex style="padding-top: 8px">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
      .active-link {
        color: #3700B3;
      }
  `]
})
export class AppComponent {
  title = 'stage-demo';
}

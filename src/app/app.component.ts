import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span>Test Test</span>
    </mat-toolbar>
    <div fxLayout="row">
      <div fxFlex="200px">
        <mat-nav-list>
          <a mat-list-item href="#">Link 1</a>
          <a mat-list-item href="#">Link 2</a>
          <a mat-list-item href="#">Link 3</a>
        </mat-nav-list>
      </div>
      <div fxFlex style="padding-top: 8px">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
  title = 'stage-demo';
}

import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule
];

@NgModule({
  imports: [modules],
  exports: [modules],
  declarations: []
})
export class MaterialModule {
}

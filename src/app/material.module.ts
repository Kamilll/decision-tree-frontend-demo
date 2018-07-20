import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatListModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatTabsModule, MatListModule, MatSnackBarModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatTabsModule, MatListModule, MatSnackBarModule],
  declarations: []
})
export class MaterialModule {
}

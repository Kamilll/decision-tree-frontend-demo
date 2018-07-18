import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatListModule, MatTabsModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatTabsModule, MatListModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatTabsModule, MatListModule],
  declarations: []
})
export class MaterialModule {
}

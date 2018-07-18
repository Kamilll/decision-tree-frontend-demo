import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule],
  declarations: []
})
export class MaterialModule {
}

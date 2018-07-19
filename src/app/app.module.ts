import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SegmentsComponent} from './segments/segments.component';
import {SegmentDetailsComponent} from './segment-details/segment-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {GraphvisDirective} from './graphvis.directive';

@NgModule({
  declarations: [
    AppComponent,
    SegmentsComponent,
    SegmentDetailsComponent,
    GraphvisDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SegmentsComponent} from './segments/segments.component';
import {SegmentDetailsComponent} from './segment-details/segment-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ShowDecisionTreeDirective} from './show-decision-tree.directive';
import {HttpClientModule} from '@angular/common/http';
import {RunsComponent} from './runs/runs.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SegmentsComponent,
    SegmentDetailsComponent,
    ShowDecisionTreeDirective,
    RunsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    // ReactiveFormsModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

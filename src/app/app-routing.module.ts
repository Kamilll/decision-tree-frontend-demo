import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SegmentsComponent} from './segments.component';
import {SegmentDetailsComponent} from './segment-details/segment-details.component';

const routes: Routes = [
  {path: 'segments', component: SegmentsComponent},
  {path: 'segments/:id', component: SegmentDetailsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

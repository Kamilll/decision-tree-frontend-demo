import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SegmentsComponent} from './segments/segments.component';
import {RunsComponent} from './runs/runs.component';

const routes: Routes = [
  {path: 'runs', component: RunsComponent},
  {path: 'segments', component: SegmentsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

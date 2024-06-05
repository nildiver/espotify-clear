import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackpegeComponent } from './pages/trackpege/trackpege.component';

const routes: Routes = [
  {
    path:'',
    component:TrackpegeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracksRoutingModule } from './tracks-routing.module';
import { TrackpegeComponent } from './pages/trackpege/trackpege.component';
import { SharedModule } from '@shared/SharedModule';


@NgModule({
  declarations: [
    TrackpegeComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
    SharedModule
  ]
})
export class TracksModule { }

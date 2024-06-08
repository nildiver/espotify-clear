import { Component, OnDestroy, OnInit } from '@angular/core';
import { TracksModel } from '../../../../core/models/tracks.models';
import { TrackService } from '../../services/track.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-trackpege',
  templateUrl: './trackpege.component.html',
  styleUrls: ['./trackpege.component.css']
})
export class TrackpegeComponent implements OnInit,OnDestroy {
 tracksTrending:Array <TracksModel> =[]
 tracksRandom:Array<TracksModel>=[]
listObservers$:Array <Subscription>=[]

 constructor(private TrackService:TrackService){}
 ngOnInit():void {
  this.loaDataAll();
  this.loaDataRandom();

 }

async loaDataAll():Promise<any>{
this.tracksTrending =await this.TrackService.getallTracks$().toPromise()
this.tracksRandom =await this.TrackService.getallTracks$().toPromise()



 }

 loaDataRandom():void{
   this.TrackService.getallRandom$()
  .subscribe((Response: TracksModel[]) =>{
    this. tracksRandom= Response
  },err =>{ console.log('error de conexion');})
 }

 ngOnDestroy(): void {

 }
}

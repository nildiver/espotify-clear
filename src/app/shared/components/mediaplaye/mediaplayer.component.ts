import { Component, OnDestroy, OnInit, } from '@angular/core';
import { TracksModel } from '@core/models/tracks.models';
import { MultimediaService } from '../../services/multimedia.service';
import { Subscription, Observable } from 'rxjs';//programacion reactiva

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit,OnDestroy {

 listObservers$:Array<Subscription>=[]

 constructor(public MultimediaService:MultimediaService){

      }
    ngOnInit():void {
     this.MultimediaService.trackInfo$.subscribe(res =>{
      console.log('debo reproducir esa cancion',res);
     })
     }


ngOnDestroy():void {
  this.listObservers$.forEach(u => u.unsubscribe())

}


}

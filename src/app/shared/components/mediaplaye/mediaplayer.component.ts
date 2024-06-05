import { Component, OnDestroy, OnInit, } from '@angular/core';
import { TracksModel } from '@core/models/tracks.models';
import { MultimediaService } from '../../services/multimedia.service';
import { Subscription } from 'rxjs';//programacion reactiva

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit,OnDestroy {
  mockCover:TracksModel ={
    "name": "BEBE (Official Video)",
    "album": "Giolì & Assia",
    "cover": "https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc",
    "url": "http://localhost:3000/track-3.mp3",
    "_id": 5,
 }
 listObservers$:Array<Subscription>=[]
 ngOnInit():void { }
 constructor(private MultimediaService:MultimediaService){
  const observer1$:Subscription= this.MultimediaService.callback.subscribe(
    (Response:TracksModel)=>{// paso de datos entre componentes sin inportar su gerarquia
      console.log('recibiendo cancion',Response);
    }
  )
  this.listObservers$=[observer1$]
 }
ngOnDestroy():void {
  this.listObservers$.forEach(u => u.unsubscribe())

}

}

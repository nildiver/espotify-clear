import { Component, Input } from '@angular/core';
import { TracksModel } from '@core/models/tracks.models';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent {
 @Input() mode:'small'| 'big' = 'small';
 @Input()track:TracksModel={_id:0,name:'',album:'',url:'',cover:''};
 constructor(private MultimediaService:MultimediaService){

 }
 ngOnInit():void {

 }
 sendPlayer(track :  TracksModel):void{
  console.log('enviando la cancion al reproductor',track)
   this.MultimediaService.callback.emit(track)
 }

}

import { Component, ElementRef, OnDestroy, OnInit, ViewChild, } from '@angular/core';
import { TracksModel } from '@core/models/tracks.models';
import { MultimediaService } from '../../services/multimedia.service';
import { Subscription, Observable, Observer } from 'rxjs';//programacion reactiva
import { state } from '@angular/animations';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit,OnDestroy {
  @ViewChild('progressBar')progressBar:ElementRef= new ElementRef('')

 listObservers$:Array<Subscription>=[]
 state:string='paused'
 constructor(public MultimediaService:MultimediaService){

      }
    ngOnInit():void {
     const Observable1$=this.MultimediaService.playerStatus$
     .subscribe(status =>this.state =status)
     this.listObservers$=[Observable1$]
     }


ngOnDestroy():void {
  this.listObservers$.forEach(u => u.unsubscribe())

}

hanledPosition(event:MouseEvent):void{
  const elNative:HTMLElement=this.progressBar.nativeElement
  const{clientX}=event
  const {x,width}=  elNative.getBoundingClientRect()
  const clickX= clientX - x
  const percentageFromX =( clickX *100)/width
console.log(`Click(x):${percentageFromX} `);
this.MultimediaService.seekAudio(percentageFromX)
}


}

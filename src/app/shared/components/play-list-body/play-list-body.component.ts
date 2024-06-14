import { Component, Input } from '@angular/core';
//import * as dataRaw from '../../../data/tracks.json'
import { TracksModel } from '../../../core/models/tracks.models';
@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent {
  @Input() tracks:TracksModel[]=[]
  optionsSort:{property:string | null,order:string}={property:null,order:'asc'}

  constructor(){}

  ngOnInit():void {
    // const {data}:any =(dataRaw as any ).default
    // this.tracks=data;

  }
  //filtro de lista ascendete y decendente con un clik
  changeSort(property:string):void{
     const {order}= this.optionsSort
     this.optionsSort={
      property,
      order:order=== 'asc'? 'desc' : 'asc'
     }
  }
}

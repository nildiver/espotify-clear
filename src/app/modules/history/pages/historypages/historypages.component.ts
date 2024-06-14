import { Component } from '@angular/core';
import { TracksModel } from '@core/models/tracks.models';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-historypages',
  templateUrl: './historypages.component.html',
  styleUrls: ['./historypages.component.css']
})
export class HistorypagesComponent {
  listResult$:Observable<any>= of([])

  constructor(private searchService:SearchService){}

 receivedata (event:string):void{
 this.listResult$= this.searchService.searchTracks$(event)

 }

}

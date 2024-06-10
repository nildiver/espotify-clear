import { Component } from '@angular/core';
import { SearchService } from '@modules/history/services/search.service';

@Component({
  selector: 'app-historypages',
  templateUrl: './historypages.component.html',
  styleUrls: ['./historypages.component.css']
})
export class HistorypagesComponent {
  constructor(private searchService:SearchService){}
 receivedata (event:string):void{
 this.searchService.searchTracks$(event)
 .subscribe(res =>{
  console.log('',res)
 })
  console.log('enviando desde padre',event);
 }

}

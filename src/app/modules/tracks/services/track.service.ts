import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TracksModel } from '@core/models/tracks.models';
import { Observable,of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
 private readonly URL=environment
  constructor(private httpClient:HttpClient) { }

  getallTracks$():Observable <any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map(({data} : any)=>{
      return data
      })
    )
  }
  getallRandom$():Observable <any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map(({data} : any)=>{
      return data.reverse()
      }),
      map((dataRevertida)=>{
        return dataRevertida.filter((track:TracksModel)=> track._id  )
        })
    )
  }

}

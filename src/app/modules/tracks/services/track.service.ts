import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TracksModel } from '@core/models/tracks.models';
import { Observable,of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
 private readonly URL=environment.api
  constructor(private httpClient:HttpClient) { }

 private skipById(lisTracks:TracksModel[],id:number):Promise<TracksModel[]>{
  return new Promise((resolve,reject)=>{
    const listTmp= lisTracks.filter(a =>a._id != id)
    resolve([])
  })
 }
  getallTracks$():Observable <any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map(({data} : any)=>{
      return data
      })
    )
  }
  getallRandom$():Observable <any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(

      mergeMap(({data} : any)=>this.skipById(data,1)),
    //  map((dataRevertida)=>{//aplicar un filter comun a un array
       // return dataRevertida.filter((track:TracksModel)=> track._id !==1 )
       // })
       tap(data => console.log(data)),
       catchError((err)=>{
        const {status, statusTex}= err;
        console.log('Algo paso',[status,statusTex])
        return of([])
       })
    )
  }

}

import { state } from '@angular/animations';
import { EventEmitter, Injectable } from '@angular/core';
import { TracksModel } from '@core/models/tracks.models';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback:EventEmitter <any> = new EventEmitter<any>()

  public trackInfo$:BehaviorSubject<any>= new BehaviorSubject(undefined)
  public audio!:HTMLAudioElement
  public timeElapsed$:BehaviorSubject<string> = new BehaviorSubject('00:00')
  public timeRemaining$:BehaviorSubject<string> = new BehaviorSubject('00:00')
  public playerStatus$:BehaviorSubject<string> = new BehaviorSubject('paused')
 // myObservable1$:Observable<any> =new Observable()
 //myObservable1$:Subject<any> =new Subject()
// myObservable1$:BehaviorSubject<any> =new BehaviorSubject('')
 //behaviorsubject hay que inicializarlo o genera error



  constructor() {
    this.audio= new Audio()
    this.trackInfo$.subscribe(responseOk =>{
   if(responseOk){
     console.log('♦♦♦♦♦',responseOk);
    this.setaudio(responseOk)

   }
    })

    this.listenAllEventns()

    //  setTimeout(()=>{
    //   this.myObservable1$.next('♪♪☺')
    //  },1000)



    // linea de subject
  //  setTimeout(()=>{
  //   this.myObservable1$.next('♪♪☺')
  //  },1000)

//   linea de observable
    // this.myObservable1$= new Observable(
    //   (observer:Observer <any>)=>{
    //  observer.next('♠♠♠♠')
    //  setTimeout(() => {
    //   observer.complete()
    //  },1000);


    //  setTimeout(() => {
    //   observer.next('♪')
    //  }, 25000);
    // })
  }
  private listenAllEventns():void{
  this.audio.addEventListener('timeupdate',this.calculateTime,false)
  this.audio.addEventListener('playing',this.setPlayingstatus,false)
  this.audio.addEventListener('play',this.setPlayingstatus,false)
  this.audio.addEventListener('pause',this.setPlayingstatus,false)
  this.audio.addEventListener('ended',this.setPlayingstatus,false)
  }

  private setPlayingstatus = (state:any)=>{
  console.log('♣♣♣♣',state)
  switch(state.type){
   case'play':
   this.playerStatus$.next('play')
   break
   case'playing':
   this.playerStatus$.next('playing')
   break
   case'ended':
   this.playerStatus$.next('ended')
   break
    default:
      this.playerStatus$.next('pause')
    break;
    }
  }

  private calculateTime =()=>{
   console.log('disparo evento')
   const{duration,currentTime}=this.audio
   console.log([duration,currentTime])
   this.setTimeElapsed(currentTime)
   this.setRemaining(currentTime,duration)
  }

  private setTimeElapsed(currentTime:number){
   let seconds=Math.floor(currentTime % 60)
   let minutes=Math.floor((currentTime/60)% 60)
   const displaySeconds= (seconds <10) ? `0${seconds}`:seconds;
   const displayMinutes= (minutes <10) ? `0${minutes}`:minutes;
   const displayFormat=`${displayMinutes}:${displaySeconds}`;
   this.timeElapsed$.next(displayFormat)
  }

  public setRemaining(currentTime:number , duration:number):void{
    let timeLeft= duration -currentTime;
    let seconds=Math.floor(currentTime % 60)
    let minutes=Math.floor((currentTime/60)% 60)
    const displaySeconds= (seconds <10) ? `0${seconds}`:seconds;
    const displayMinutes= (minutes <10) ? `0${minutes}`:minutes;
    const displayFormat=`-${displayMinutes}:${displaySeconds}`;
    this.timeRemaining$.next(displayFormat)
  }

  public setaudio(track :TracksModel):void{
    console.log('♦♦♦♦♦',track);
    this.audio.src=track.url
    this.audio.play()
  }

  public togglePlayer():void{
    (this.audio.paused)?this.audio.play():this.audio.pause()
  }
}

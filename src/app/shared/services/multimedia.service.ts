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
  public timeRemaining$:BehaviorSubject<string> = new BehaviorSubject('-00:00')
  public playerStatus$:BehaviorSubject<string> = new BehaviorSubject('paused')
  public playerPercentage$:BehaviorSubject<number> = new BehaviorSubject(0)

  constructor() {
    this.audio= new Audio()
    this.trackInfo$.subscribe(responseOk =>{
   if(responseOk){
     console.log('♦♦♦♦♦',responseOk);
    this.setaudio(responseOk)

   }
    })

    this.listenAllEventns()


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
   this.setPercentage(currentTime,duration)
  }

  private setPercentage(currentTime:number,duration:number):void{
    let percentage =(currentTime * 100)/duration;
    this.playerPercentage$.next(percentage)
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
    let seconds=Math.floor(timeLeft % 60)
    let minutes=Math.floor((timeLeft/60)% 60)
    const displaySeconds= (seconds <10) ? `0${seconds}`:seconds;
    const displayMinutes= (minutes <10) ? `0${minutes}`:minutes;
    const displayFormat=`-${displayMinutes}:${displaySeconds}`;
    this.timeRemaining$.next(displayFormat)
  }

  public setaudio(track :TracksModel):void{
    console.log('♦♦♦♦♦',track);
    console.log(track.url)
    this.audio.src=track.url
    this.audio.play()
  }

  public togglePlayer():void{
    (this.audio.paused)?this.audio.play():this.audio.pause()
  }

  public seekAudio(percentage:number):void{
  const {duration}=this.audio
  const percentageSecons=(percentage * duration)/100
  this.audio.currentTime=percentageSecons
  }
}

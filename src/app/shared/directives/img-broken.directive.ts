import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handlerror():void{
    const elNative= this.elHost.nativeElement
    console.log('esta imagen no esta disponible',this.elHost);
    elNative.src='http://i.imgur.com/fFU3IqP.png '
  }

  constructor(private elHost:ElementRef) { }

}

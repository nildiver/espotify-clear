import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent {
  mainMenu:{
    defaultOptions:Array<any>,accessLink:Array<any>
  }={defaultOptions:[],accessLink:[]}

  coustomOptions:Array<any>=[]
  constructor( private router:Router ){}
ngOnInit():void {
  this.mainMenu.defaultOptions = [
    {
      name: 'Home',
      icon: 'bi bi-house',
      router: ['/', 'auth']
    },
    {
      name: 'Buscar',
      icon: '  bi-search',
      router: ['/', 'history']
    },
    {
      name: 'Tu biblioteca',
      icon: ' bi-collection',
      router: ['/', 'favorites'],
      query: { hola: 'mundo' }
    }
  ]

  this.mainMenu.accessLink = [
    {
      name: 'Crear lista',
      icon: 'bi-card-checklist'
    },
    {
      name: 'Canciones que te gustan',
      icon: 'bi-music-note-list'
    }
  ]

  this.coustomOptions = [
    {
      name: 'Mi lista º1',
      router: ['/']
    },
    {
      name: 'Mi lista º2',
      router: ['/']
    },
    {
      name: 'Mi lista º3',
      router: ['/']
    },
    {
      name: 'Mi lista º4',
      router: ['/']
    }
  ]
}
goto($sevent:any):void{
this.router.navigate(['/','favorites'],{
  queryParams:{
    'key1':'value1',
    'key2':'value2',
    'key3':'value3'
  }

})
console.log($sevent)
}
}

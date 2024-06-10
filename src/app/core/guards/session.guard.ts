import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn:'root'
})
export class SessionGuard implements CanActivate{
  constructor(private CookieService:CookieService , private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.checkCookieSession() ;
  }
  checkCookieSession():boolean{
    try {
      const token:boolean =this.CookieService.check('token')
      console.log('♣♣♣',token);
      if (!token) {
        this.router.navigate(['/','auth'])
      }
      return token

    } catch (e) {
      console.log('algo sucedio ??☻',e)
      return false

    }
    return true
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(public router:Router){}

  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
      if(localStorage.getItem("email") ===null ){
      this.router.navigate(['signup']);
      }
      return true;
    }
  }


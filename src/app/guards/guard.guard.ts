import { AbmService } from './../services/abm.service';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(
    private auth:AuthService,
    private router: Router,
    private abmSvc: AbmService
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.verificarLogueo();
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.verificarForm();
  }
  verificarForm(){
    if(this.abmSvc.formCompleto){
      return true;
    }
    else{
      return false;
    }
  }

  verificarLogueo(){
    if(this.auth.ChequearLogueado()){
          
          
    return true;
  }
  else{
    console.log('Acces Denied');
    this.router.navigate(['/login']);
    return false;
  }}
  
}

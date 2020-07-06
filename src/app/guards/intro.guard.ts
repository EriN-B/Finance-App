import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {

  constructor(private storage: Storage, private router: Router){

  }
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): | Promise<boolean> {
    
        let introSeen = await this.storage.get('seen-intro');

        if(!introSeen){
          this.router.navigateByUrl('/intro');
          console.log("Cant Navigate to this URL");
        }
          return introSeen;
  }
}

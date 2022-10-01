import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthentificationServiceService } from './authentification-service.service';


@Injectable({
  providedIn: 'root'
})

// le role du guard c'est de piloter le routing
export class PageAuthentificationGuard implements CanActivate {

  constructor(
    private serviceAuthentification: AuthentificationServiceService,
    private router: Router
  ){
  }

  canActivate(): boolean {
    if(this.serviceAuthentification.connexion){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  
}

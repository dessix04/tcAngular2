import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationServiceService } from '../authentification-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  alerteLogin:string = "Se connecter !!!!!";
  name: string;
  pwd: string;
  auth: AuthentificationServiceService;

  constructor(
    private authentification: AuthentificationServiceService,
    private routerLogin: Router
  ) { }

  ngOnInit(){
    this.auth = this.authentification;
  }

  MisAJourAlerte(){
    if(this.authentification.connexion){
      this.alerteLogin = "Connecté";
    }
    else {
      this.alerteLogin = "Nom ou mot de passe incorrects"
    }
  }

  login(){
    this.alerteLogin = "Connexion en cours ........";
    this.authentification.login(this.name, this.pwd)
    .subscribe((connecte: boolean) => {
      this.MisAJourAlerte();
      if(connecte){
        this.routerLogin.navigate(['/page-dacceuil']);
      }
      else {
        this.routerLogin.navigate(['/login'])
      }
    })
  }

  deconnexion(){
    this.authentification.logout();
    this.alerteLogin= "Se déconnecter"
  }

}

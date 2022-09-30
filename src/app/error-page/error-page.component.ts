import { Component} from '@angular/core';

@Component({
  selector: 'app-error-page',
  template: `
    <h1>
      error-page works!
    </h1>
    <p> Vous avez entré un chemin érroné </p>
    <a routerLink="/page-dacceuil"> Veuillez retourner à la page d'acceuil </a>
  `,
})
export class ErrorPageComponent {

}
// cette page est affichée dans le cas où on rentre un chemin invalide
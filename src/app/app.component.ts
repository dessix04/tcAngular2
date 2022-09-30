import { Component } from '@angular/core'; // on importe Component dans angular/core


// les `` sont utilisés pour insérer des chaines de caractères longues
@Component({
  selector: 'app-root', // le composant est app-root, selector nous définir notre proprement balise html
  templateUrl: 'app.component.html' // ça permet avec un url de faire un lien vers le fichier du template 
})

// export permet d'exporter des composents 
export class AppComponent {
}
// un composant , c'est une classe et une vue
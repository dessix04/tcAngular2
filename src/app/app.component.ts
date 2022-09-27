import { Component } from '@angular/core'; // on importe Component dans angular/core

// les `` sont utilisés pour insérer des chaines de caractères longues
@Component({
  selector: 'app-root', // le composant est app-root, selector nous définir notre proprement balise html
  template: `<h1> 
      <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
      Welcome to {{title}}! 
    </h1>`
})

// export permet d'exporter des composents 
export class AppComponent {
  title = 'Les Argonautes';
}

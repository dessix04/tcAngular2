import { Component } from '@angular/core'; // on importe Component dans angular/core
import { Argonaute } from './argonaute';
import { ARGONAUTE } from './list-argonaute';

// les `` sont utilisés pour insérer des chaines de caractères longues
@Component({
  selector: 'app-root', // le composant est app-root, selector nous définir notre proprement balise html
  template: ` 
  <header>
    <h1>
      <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
      Les Argonautes
    </h1>
  </header>

  <!-- Main section la partie importante de la page -->
  <main>
    <!-- New member form -->
    <section id="premiere">
      <h2>Ajouter un(e) Argonaute</h2>
      <form class="new-member-form" id="new-member-form">
          <p>
              <label for="name">Nom de l&apos;Argonaute</label>
              <input id="name" name="name" type="text" placeholder="Entrez le nom" />
          </p>
          <p>
              <label for="forname">Prénom de l&apos;Argonaute</label>
              <input id="forname" name="forname" type="text" placeholder="Entrez le prénom" />
          </p>
          <p>
              <label for="qualif">Qualificatif</label>
              <input id="qualif" name="qualif" type="text" placeholder="Entrez un ou des qualificatifs" />
          </p>
          <button type="submit" name="submit" id="envoyer">Envoyer</button>
      </form>
    </section>

    <section id="deuxieme">
      <h2> Nombre de personnes enregistrées</h2>
      <p>Vous venez d'enregistrer le <span id="nbre">nbre</span> ème argonaute</p>
      <button name="effacer" id="effacer">Effacer</button>
    </section>
    
    <!-- Member list -->
    <section class="member-list" id="troisieme">
      <h2>Membres de l'équipage</h2>
    </section>
  </main>

  <footer>
    <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
  </footer>`
})

// export permet d'exporter des composents 
export class AppComponent {
  title = 'Les Argonautes';
  listesArgonautes = ARGONAUTE;
  
  ngOnInit(){
    console.table(this.listesArgonautes)
  }
    
}
// un composant , c'est une classe et une vue
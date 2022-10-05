import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Argonaute } from '../argonaute';
import { ArgonauteService } from '../argonaute.service';

@Component({
  selector: 'app-ajout-new-argonaute',
  template: `<!-- Ajout member form -->
  <section id="premiere">
  <h2>Ajouter un(e) Argonaute</h2>
  <form *ngIf="argonaute" (ngSubmit)="siEnvoiForm()" #editArgonauteForm="ngForm"
  class="new-member-form" id="new-member-form">
      <p class="form-groupe">
          <label for="name">Nom de l&apos;Argonaute</label>
          <input type="text" id="name" 
          required
          [(ngModel)]="argonaute.nom" name="name"
          #name="ngModel" />
      </p>
      <p>
          <label for="forname">Prénom de l&apos;Argonaute</label>
          <input id="forname" type="text"
          required
          [(ngModel)]="argonaute.prenom"
          name="forname"
          #forname="ngModel"  />
      </p>
      <p>
          <label for="qualif">Qualificatif</label>
          <input id="qualif" 
          type="text"
          required
          [(ngModel)]="argonaute.qualificatif"
          name="qualif"
          #qualif="ngModel"/>
      </p>
      <button type="submit" name="submit" id="envoyer" [disabled]="editArgonauteForm.invalid">Envoyer</button>
</form>
</section>
<h3 *ngIf="!argonaute">
  Aucun Argonaute à éditer
</h3>
  `,
})
export class AjoutNewArgonauteComponent implements OnInit {
  argonaute: Argonaute;

  constructor(
   private argonauteService: ArgonauteService,
   private routerAjouter: Router
  ){}

  ngOnInit() {
    this.argonaute =  new Argonaute();
  }

  siEnvoiForm(){
  this.argonauteService.toAddArgonaute(this.argonaute)
  .subscribe((argonaute: Argonaute|undefined) => this.routerAjouter.navigate(['/argonaute', argonaute?.id]))
  }

}

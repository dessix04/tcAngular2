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
          pattern="^[a-zA]{1,25}$"
          [(ngModel)]="argonaute.nom" name="name"
          #name="ngModel" />
          <span [hidden]="name.valid || name.pristine">
              le nom de l'argonaute est requis ( 25 lettres max)
        </span>
      </p>
      <p>
          <label for="forname">Prénom de l&apos;Argonaute</label>
          <input id="forname" type="text"
          required
          pattern="^[a-zA]{1,25}$"
          [(ngModel)]="argonaute.prenom"
          name="forname"
          #forname="ngModel"  />
          <span [hidden]="forname.valid || forname.pristine">
              le prenom de l'argonaute est requis ( 25 lettres max)
          </span>
      </p>
      <p>
          <label for="qualif">Qualificatif</label>
          <input id="qualif" 
          type="text"
          required
          [(ngModel)]="argonaute.qualificatif"
          name="qualif"
          #qualif="ngModel"/>
          <span [hidden]="qualif.valid || qualif.pristine">
              le nom qualificatif est requis ( 25 lettres max)
          </span>
      </p>
      <button type="submit" name="submit" id="envoyer" [disabled]="editArgonauteForm.form.valid">Envoyer</button>
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
    this.argonaute = new Argonaute();
  }

  siEnvoiForm(){
  this.argonauteService.toAddArgonaute(this.argonaute)
  .subscribe((argonaute: Argonaute|undefined) => this.routerAjouter.navigate(['/argonaute', argonaute?.id]))
  }

}

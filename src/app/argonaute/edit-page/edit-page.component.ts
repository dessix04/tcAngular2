import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Argonaute } from '../argonaute';
import { ArgonauteService } from '../argonaute.service';

@Component({
  selector: 'app-edit-page',
  template:`<!-- Modif member form -->
    <h2>Modifier l'argonaute {{ argonaute?.nom }}</h2>
    <app-argonaute-edit></app-argonaute-edit>
  `,
})
export class EditPageComponent implements OnInit {
  argonaute: Argonaute|undefined;

  constructor(
    private routerModifier: Router,
    private routeEdit: ActivatedRoute,
    private argonauteService: ArgonauteService
  ) { }

  ngOnInit(){
    const IdArgono: string|null = this.routeEdit.snapshot.paramMap.get('id');
    if (IdArgono){
    this.argonauteService.RecupererIdArgonaute(+IdArgono)
    .subscribe(argonaute => this.argonaute = argonaute);
    };
  }
  siEnvoiForm(){
    if(this.argonaute)
    this.argonauteService.updateArgonaute(this.argonaute)
    .subscribe(() => this.routerModifier.navigate(['/argonaute', this.argonaute?.id]))}
    ;
}

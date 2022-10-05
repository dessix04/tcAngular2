import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Argonaute } from '../argonaute/argonaute';
import { ArgonauteService } from '../argonaute/argonaute.service';

@Component({
  selector: 'app-argo-form',
  templateUrl:'argo-form.component.html',
})
export class ArgoFormComponent implements OnInit {

  

  argonaute: Argonaute;

  constructor(
   private argonauteService: ArgonauteService,
   private routerAjouter: Router
  ){}

  ngOnInit() {
  }

  siEnvoi(){
  this.argonauteService.toAddArgonaute(this.argonaute)
  .subscribe((argonaute: Argonaute|undefined) => this.routerAjouter.navigate(['/argonaute', argonaute?.id]))
  }

}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Argonaute } from '../argonaute';


@Component({
  selector: 'app-argonaute-edit',
  templateUrl: 'edit-argonaute.component.html',
  styleUrls: ['edit-argonaute.component.css']
})
export class EditArgonauteComponent {
  @Input() argonaute: Argonaute;

  constructor(
    private routerModifier: Router) { }

  siEnvoiForm(){
    this.routerModifier.navigate(['/argonaute', this.argonaute.id]);
  }

}

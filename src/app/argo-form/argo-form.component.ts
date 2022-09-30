import { Component, OnInit } from '@angular/core';
import { ArgonauteService } from '../argonaute/argonaute.service';

@Component({
  selector: 'app-argo-form',
  templateUrl:'argo-form.component.html',
})
export class ArgoFormComponent implements OnInit {

  constructor(private argonauteService: ArgonauteService) { }

  ngOnInit(): void {

  }

  siEnvoi(){

  }

}

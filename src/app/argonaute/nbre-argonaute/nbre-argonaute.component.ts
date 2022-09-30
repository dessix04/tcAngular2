import { Component, OnInit } from '@angular/core';
import { ARGONAUTE } from 'src/app/argonaute/list-argonaute';

@Component({
  selector: 'app-nbre-argonaute',
  templateUrl: './nbre-argonaute.component.html',
  styles: [
  ]
})
export class NbreArgonauteComponent implements OnInit {

  listesArgonautes = ARGONAUTE;
  index: number = this.listesArgonautes.length;
  
  constructor() { }

  ngOnInit(): void {
  }

}

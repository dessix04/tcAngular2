import { Component, OnInit } from '@angular/core';
import { Argonaute } from '../argonaute';
import { ArgonauteService } from '../argonaute.service';


@Component({
  selector: 'app-nbre-argonaute',
  templateUrl: './nbre-argonaute.component.html',
  styles: [
  ]
})
export class NbreArgonauteComponent implements OnInit {

 listesArgonautes: Argonaute[];
  
  constructor(private Nbreservice: ArgonauteService) { }

  ngOnInit(){
   this.Nbreservice.NbreArgonaute()
    .subscribe(listesArgonautes => this.listesArgonautes = listesArgonautes)
  }
  index(){
    this.Nbreservice.NbreArgonaute()
    .subscribe(listesArgonautes => this.listesArgonautes = listesArgonautes)
  }
}

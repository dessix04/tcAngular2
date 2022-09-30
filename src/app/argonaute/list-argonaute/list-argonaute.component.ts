import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Argonaute } from '../argonaute';
import { ArgonauteService } from '../argonaute.service';

@Component({
  selector: 'app-list-argonaute',
  templateUrl: './list-argonaute.component.html',
})
export class ListArgonauteComponent implements OnInit {
  listesArgonautes: Argonaute[];

  constructor(private router:Router,
              private argonauteService: ArgonauteService) { }
  
              ngOnInit(){
                this.argonauteService.RecupererListeArgonaute()
                .subscribe(listesArgonautes => this.listesArgonautes = listesArgonautes)
              }

  AfficherArgonaute( argonaute: Argonaute){
    this.router.navigate(['/argonaute', argonaute.id])
  }
}

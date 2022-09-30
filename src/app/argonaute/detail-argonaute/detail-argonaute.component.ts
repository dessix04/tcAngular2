import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // c'est une service qui rend disponible la route
import { Argonaute } from '../argonaute';
import { ArgonauteService } from '../argonaute.service';

@Component({
  selector: 'app-detail-argonaute',
  templateUrl: './detail-argonaute.component.html',
})
export class DetailArgonauteComponent implements OnInit {
  listesArgonautes: Argonaute[];
  argonaute: Argonaute|undefined;

  //pour importer le retouter, on doit passer par le constructor
  constructor(private route:ActivatedRoute,
               private router:Router,
               private argonauteService: ArgonauteService) { }

  // paramMap : recupère en tableau tous les paramètres à
  // snapshot : à l'instant t
  ngOnInit(){
    const IdArgono : string|null = this.route.snapshot.paramMap.get('id');
    
    if(IdArgono){
      this.argonauteService.RecupererIdArgonaute(+IdArgono)
      .subscribe((argonaute => this.argonaute = argonaute));
    } 
  }

  // fonction pour rediriger vers la page d'acceuil
  returnPageDacceuil(){
      this.router.navigate(['/page-dacceuil']);
  }

   // fonction pour rediriger vers la page de modification
  versPageEdit(argonaute: Argonaute){
    this.router.navigate(['/edit-page', argonaute.id])
  }

  // fonction pour supprimer un Argonaute puis diriger vers la page d'acceuil
  supprimerArgonaute(argonaute: Argonaute){
    this.argonauteService.DeleteArgonauteById(argonaute.id)
    .subscribe(() => this.returnPageDacceuil());
  }

}

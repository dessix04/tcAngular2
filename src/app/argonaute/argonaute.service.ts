import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Argonaute } from './argonaute';

@Injectable({
  providedIn: 'root'
  // à savoir qu'on peut changer la dependance et s'il le faut on doit ajouter
  // dans argonaute.module.ts dans le @ngModule après les imports en ajoutant
  // providers:[ArgonauteService]
})
export class ArgonauteService {

  constructor(private http: HttpClient){}

  // recuperation de la liste des argonautes
  RecupererListeArgonaute(): Observable<Argonaute[]> {
    return this.http.get<Argonaute[]>('api/argonautes').pipe(
      tap((response) => this.log(response)),
      catchError( (error) => this.recupCatchError(error, []))
    )
  }

  // recupération de l'index d'un Argoanute
  RecupererIdArgonaute(idArgo: number): Observable<Argonaute|undefined>{
    return this.http.get<Argonaute>(`api/argonautes/${idArgo}`).pipe(
      tap((response) => this.log(response)),
      catchError( (error) => this.recupCatchError(error, undefined))
    )
  }

  // mis à jour après modification
  updateArgonaute(argonaute: Argonaute): Observable<Argonaute|undefined>{
    const httOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    return this.http.put('api/argonautes', argonaute, httOptions).pipe(
      tap((respoonse) => this.log(respoonse)),
      catchError( (error) => this.recupCatchError(error, undefined))
    )
  }

  // gestion de cas de suppression 
  DeleteArgonauteById(idArgo: number): Observable<Argonaute|undefined>{
    return this.http.delete(`api/argonautes/${idArgo}`).pipe(
      tap((response) => this.log(response)),
      catchError( (error) => this.recupCatchError(error, undefined))
    )
  }

  // Ajout d'un nouveau membre ou d'un nouveau argonaute
  toAddArgonaute(argonaute: Argonaute): Observable<Argonaute|undefined>{
    const httOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.http.post<Argonaute|undefined>('api/argonautes', argonaute, httOptions).pipe(
      tap((respoonse) => this.log(respoonse)),
      catchError( (error) => this.recupCatchError(error, undefined))
    )
  }

  // j'ai fait ces fonctions log, recuCatchError pour eviter la redondance et rendre le code plus lisible
  private log(response: any) {
    console.table(response);
  }

  private recupCatchError(error: Error, valueErreur: any) {
    console.error(error);
    return of(valueErreur);// of emet un flux, ici undefined
  }
}



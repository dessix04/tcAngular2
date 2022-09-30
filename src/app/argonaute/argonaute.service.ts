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

  RecupererListeArgonaute(): Observable<Argonaute[]> {
    return this.http.get<Argonaute[]>('api/page-dacceuil').pipe(
      tap((response) => this.log(response)),
      catchError( (error) => this.recupCatchError(error, []))
    )
  }

  RecupererIdArgonaute(idArgo: number): Observable<Argonaute|undefined>{
    return this.http.get<Argonaute>(`api/argonaute/${idArgo}`).pipe(
      tap((response) => this.log(response)),
      catchError( (error) => this.recupCatchError(error, undefined))
    )
  }

  // mis à jour après modification
  updateArgonaute(argonaute: Argonaute): Observable<Argonaute|undefined>{
    const httOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    return this.http.put('api/listeArgonautes', argonaute, httOptions).pipe(
      tap((respoonse) => this.log(respoonse)),
      catchError( (error) => this.recupCatchError(error, undefined))
    )
  }

  private log(response: any) {
    console.table(response);
  }

  private recupCatchError(error: Error, valueErreur: any) {
    console.error(error);
    return of(valueErreur);// of emet un flux, ici undefined
  }
}



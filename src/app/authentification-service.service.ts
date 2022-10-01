import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationServiceService {
  connexion: boolean=false;
  urlDeRedirection: string;


  login(name: string, mdp: string): Observable<boolean>{
    const connexion = (name == 'testWSC2022' && mdp == 'testWSC2022');

    return of(connexion).pipe(
      delay(1000),
      tap(connexion => this.connexion = connexion)
    );
  }

  logout(){
    this.connexion = false;
  }
}

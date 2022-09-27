import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';// module qui fournit les modules essentielles et necessaires de angular

import { AppRoutingModule } from './app-routing.module';// fichier qui contient nos routes
import { AppComponent } from './app.component';// fichier qui contient nos composants

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // page d'acceuil ou de demarrage ou composant racine
})
export class AppModule { }

/*

 app.module.ts est le module racine de tout le projet*/
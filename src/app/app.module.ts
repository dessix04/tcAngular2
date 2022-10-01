import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';// module qui fournit les modules essentielles et necessaires de angular
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';// fichier qui contient nos routes
import { AppComponent } from './app.component';
import { ArgoFormComponent } from './argo-form/argo-form.component';// fichier qui contient nos composants
import { BaseDeDonneService } from './base-de-donne.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ArgonauteModule } from './argonaute/argonaute.module';
import { ListArgonauteComponent } from './argonaute/list-argonaute/list-argonaute.component';
import { NbreArgonauteComponent } from './argonaute/nbre-argonaute/nbre-argonaute.component';
import { DetailArgonauteComponent } from './argonaute/detail-argonaute/detail-argonaute.component';
import { PageDAcceuilComponent } from './argonaute/page-d-acceuil/page-d-acceuil.component';
import { EditArgonauteComponent } from './argonaute/edit-argonaute/edit-argonaute.component';
import { EditPageComponent } from './argonaute/edit-page/edit-page.component';
import { AjoutNewArgonauteComponent } from './argonaute/ajout-new-argonaute/ajout-new-argonaute.component';

@NgModule({
  declarations: [
    AppComponent,
    ArgoFormComponent, 
    ListArgonauteComponent,
    NbreArgonauteComponent,
    DetailArgonauteComponent,
    PageDAcceuilComponent,
    ErrorPageComponent,
    EditArgonauteComponent,
    EditPageComponent,
    AjoutNewArgonauteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ArgonauteModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(BaseDeDonneService, { dataEncapsulation: false}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // page d'acceuil ou de demarrage ou composant racine
})
export class AppModule { }

/*

 app.module.ts est le module racine de tout le projet*/
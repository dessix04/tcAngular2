import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailArgonauteComponent } from './argonaute/detail-argonaute/detail-argonaute.component';
import { EditPageComponent } from './argonaute/edit-page/edit-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PageDAcceuilComponent } from './argonaute/page-d-acceuil/page-d-acceuil.component';
import { PageAuthentificationGuard } from './page-authentification.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'edit-page/:id', component: EditPageComponent, canActivate: [PageAuthentificationGuard]},
  {path: 'page-dacceuil', component: PageDAcceuilComponent, canActivate: [PageAuthentificationGuard]},
  {path: 'argonaute/:id', component: DetailArgonauteComponent, canActivate: [PageAuthentificationGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorPageComponent, canActivate: [PageAuthentificationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailArgonauteComponent } from './argonaute/detail-argonaute/detail-argonaute.component';
import { EditPageComponent } from './argonaute/edit-page/edit-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PageDAcceuilComponent } from './page-d-acceuil/page-d-acceuil.component';

const routes: Routes = [
  {path: 'edit-page/:id', component: EditPageComponent},
  {path: 'page-dacceuil', component: PageDAcceuilComponent},
  {path: 'argonaute/:id', component: DetailArgonauteComponent},
  {path: '', redirectTo: 'page-dacceuil', pathMatch: 'full'},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { HomeLoginComponent } from './home-login/home-login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'home-login', component: HomeLoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

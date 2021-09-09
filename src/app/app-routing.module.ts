import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { SolucionesComponent } from './components/soluciones/soluciones.component';

const routes: Routes = [
  {path:'home', component: PrincipalComponent},
  {path:'soluciones', component: SolucionesComponent},
  {path:'quienesSomos', component: QuienesSomosComponent},
  {path:'**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

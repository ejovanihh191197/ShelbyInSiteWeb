import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProductoDosComponent } from './components/producto-dos/producto-dos.component';
import { ProductoUnoComponent } from './components/producto-uno/producto-uno.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { SolucionesComponent } from './components/soluciones/soluciones.component';

const routes: Routes = [
  {path:'home', component: PrincipalComponent},
  {path:'soluciones', component: SolucionesComponent},
  {path:'quienesSomos', component: QuienesSomosComponent},
  {path:'productoUno', component: ProductoUnoComponent},
  {path:'productoDos', component: ProductoDosComponent},
  {path:'**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

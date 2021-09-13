import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PiePaginaComponent } from './shared/pie-pagina/pie-pagina.component';
import { SolucionesComponent } from './components/soluciones/soluciones.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ProductoUnoComponent } from './components/producto-uno/producto-uno.component';
import { ProductoDosComponent } from './components/producto-dos/producto-dos.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    PiePaginaComponent,
    SolucionesComponent,
    QuienesSomosComponent,
    ProductoUnoComponent,
    ProductoDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

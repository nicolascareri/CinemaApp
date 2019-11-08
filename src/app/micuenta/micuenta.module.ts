import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MicuentaRoutingModule } from './micuenta-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { TerminosComponent } from './terminos/terminos.component';
import { FaqComponent } from './faq/faq.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';


@NgModule({
  declarations: [PerfilComponent, TerminosComponent, FaqComponent, ConfiguracionComponent],
  imports: [
    MicuentaRoutingModule,
    CommonModule,
  ]
})
export class MicuentaModule { }

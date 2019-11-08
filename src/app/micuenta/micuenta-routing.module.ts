import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MicuentaComponent } from './micuenta.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { TerminosComponent } from './terminos/terminos.component';
import { FaqComponent } from './faq/faq.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  {path: 'cuenta', component: MicuentaComponent, children: [
      {path: '', component: PerfilComponent},
      {path: 'configuracion', component: ConfiguracionComponent},
      {path: 'perfil', component: PerfilComponent},
      {path: 'terminosycondiciones', component: TerminosComponent},
      {path: 'faq', component: FaqComponent},
      {path: '**', component: MicuentaComponent},
  ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicuentaRoutingModule { }

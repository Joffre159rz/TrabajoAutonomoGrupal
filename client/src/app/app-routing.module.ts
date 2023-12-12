import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { DepartamentoUsuarioComponent } from './pages/departamento-usuario/departamento-usuario.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { FlujoProcesoComponent } from './pages/flujo-proceso/flujo-proceso.component';
import { ProcesoDeterminadoComponent } from './pages/proceso-determinado/proceso-determinado.component';
import { SolicitudBajaComponent } from './pages/solicitud-baja/solicitud-baja.component';

const routes: Routes = [

  //TODO RUTAS PRINCIPALES
  {path: '', component: AuthComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'usuarios', component: UserComponent},
  {path: 'departamento-usuario', component: DepartamentoUsuarioComponent},
  {path: 'documentos', component: DocumentosComponent},
  {path: 'flujo-proceso', component: FlujoProcesoComponent},
  {path: 'proceso-determinado', component: ProcesoDeterminadoComponent},
  {path: 'solicitud-baja', component: SolicitudBajaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

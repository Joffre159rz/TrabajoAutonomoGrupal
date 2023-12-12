import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { DepartamentoUsuarioComponent } from './pages/departamento-usuario/departamento-usuario.component';
import { FlujoProcesoComponent } from './pages/flujo-proceso/flujo-proceso.component';
import { ProcesoDeterminadoComponent } from './pages/proceso-determinado/proceso-determinado.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { SolicitudBajaComponent } from './pages/solicitud-baja/solicitud-baja.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    UserComponent,
    DepartamentoUsuarioComponent,
    FlujoProcesoComponent,
    ProcesoDeterminadoComponent,
    DocumentosComponent,
    SolicitudBajaComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

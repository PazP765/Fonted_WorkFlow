import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { pathToFileURL } from 'url';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AutorizarComponent } from './components/autorizar/autorizar.component';
import { VigilanciaComponent } from './components/vigilancia/vigilancia.component';
import { MonitoreoComprasComponent } from './components/monitoreo-compras/monitoreo-compras.component';
import { ManagerComponent } from './components/manager/manager.component';
import { MonitoreoAlmacenComponent } from './components/monitoreo-almacen/monitoreo-almacen.component';
import { BloquearAcesoGuard } from './components/guards/bloquear-aceso.guard';
import { MostrarDatosComponent } from './components/mostrar-datos/mostrar-datos.component';
import { VistaGeneralComponent } from './components/vista-general/vista-general.component';

const routes: Routes = [
//{path: ' ', pathMatch: 'full', redirectTo: '#'},
//{path: 'login', component: HomeComponent },
{path:'login',  component: HomeComponent, canActivate: [BloquearAcesoGuard]},
{path: 'form', component: FormularioComponent},
{path: 'manager/authorize/:id', component: AutorizarComponent},
{path: 'vigilance', component: VigilanciaComponent},
{path: 'monitoring', component: MonitoreoComprasComponent},
{path: 'manager', component: ManagerComponent},
{path: 'monitoreo2', component: MonitoreoAlmacenComponent},
{path: 'general', component: VistaGeneralComponent},
{path: 'general/verInfo/:id', component: MostrarDatosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

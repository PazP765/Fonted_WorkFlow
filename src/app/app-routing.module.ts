import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { pathToFileURL } from 'url';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AutorizarComponent } from './components/autorizar/autorizar.component';
import { SalidaActivoComponent } from './components/salida-activo/salida-activo.component';
import { VigilanciaComponent } from './components/vigilancia/vigilancia.component';
import { MonitoreoComprasComponent } from './components/monitoreo-compras/monitoreo-compras.component';
import { RetornoActivoComponent } from './components/retorno-activo/retorno-activo.component';
import { ManagerComponent } from './components/manager/manager.component';
import { MonitoreoAlmacenComponent } from './components/monitoreo-almacen/monitoreo-almacen.component';

const routes: Routes = [
//{path: ' ', pathMatch: 'full', redirectTo: 'home'},
{path: 'login', component: HomeComponent },
{path: 'form', component: FormularioComponent},
{path: 'manager/authorize/:id_solicitud', component: AutorizarComponent},
{path: 'output-active', component: SalidaActivoComponent},
{path: 'vigilance', component: VigilanciaComponent},
{path: 'monitoring', component: MonitoreoComprasComponent},
{path: 'active-return', component: RetornoActivoComponent},
{path: 'manager', component: ManagerComponent},
{path: 'monitoreo2', component: MonitoreoAlmacenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterModule],
  exports: []
})
export class AppRoutingModule { }

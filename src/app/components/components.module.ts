import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AutorizarComponent } from './autorizar/autorizar.component';
import { SalidaActivoComponent } from './salida-activo/salida-activo.component';
import { VigilanciaComponent } from './vigilancia/vigilancia.component';
import { MonitoreoComprasComponent } from './monitoreo-compras/monitoreo-compras.component';
import { RetornoActivoComponent } from './retorno-activo/retorno-activo.component';
import { ManagerComponent } from './manager/manager.component';
import { MonitoreoAlmacenComponent } from './monitoreo-almacen/monitoreo-almacen.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegresoActicoCheckComponent } from './regreso-actico-check/regreso-actico-check.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FormularioComponent,
    SalidaActivoComponent,
    VigilanciaComponent,
    MonitoreoComprasComponent,
    RetornoActivoComponent,
    ManagerComponent,
    MonitoreoAlmacenComponent,
    AutorizarComponent,
    RegresoActicoCheckComponent
 

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    FormularioComponent,
    SalidaActivoComponent,
    VigilanciaComponent,
    MonitoreoComprasComponent,
    RetornoActivoComponent,
    ManagerComponent
  ]
})
export class ComponentsModule { }

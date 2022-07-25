import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AutorizarComponent } from './autorizar/autorizar.component';
import { VigilanciaComponent } from './vigilancia/vigilancia.component';
import { MonitoreoComprasComponent } from './monitoreo-compras/monitoreo-compras.component';
import { ManagerComponent } from './manager/manager.component';
import { MonitoreoAlmacenComponent } from './monitoreo-almacen/monitoreo-almacen.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VistaGeneralComponent } from './vista-general/vista-general.component';
import { MostrarDatosComponent } from './mostrar-datos/mostrar-datos.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FormularioComponent,
    VigilanciaComponent,
    MonitoreoComprasComponent,
    ManagerComponent,
    MonitoreoAlmacenComponent,
    AutorizarComponent,
    VistaGeneralComponent,
    MostrarDatosComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    FormularioComponent,

    
    VigilanciaComponent,
    MonitoreoComprasComponent,
    ManagerComponent
  ]
})
export class ComponentsModule { }

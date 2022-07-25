import { identifierName } from '@angular/compiler';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service'; 
import {BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
declare var window: any;
@Component({
  selector: 'app-monitoreo-almacen',
  templateUrl: './monitoreo-almacen.component.html',
  styleUrls: ['./monitoreo-almacen.component.css']
})
export class MonitoreoAlmacenComponent implements OnInit {
  solicitud:Solicitud = new Solicitud();
  datatable:any=[];
  title:any="";
  formModal: any;//1
  public titles=''
  bsModalRef:BsModalRef=new BsModalRef;
  constructor(private solicitudService:SolicitudService, 
    private modalService: BsModalService,private _CargarScripts:CargarScriptsService) {_CargarScripts.carga(["tabla_filtros"]) }





  ngOnInit(): void {
  
    
    
    this.onDataTable();
  }
  openFormModalSA() {
     
      console.log(this.titles)
      this.formModal.show();
   }//3


  openFormModalRA() {
       
        console.log(this.titles)
        this.formModal.show();
      }
   
    
  //3
  saveSomeThingSA() {
    // confirm or save something
    this.formModal.hide();
  }//4
  
  
  onDataTable()
{
this.solicitudService.getSolicitud().subscribe(res=>{
  
  this.datatable=res;
  console.log("a",res, this.solicitud.status2);
});

}
onUpdateActivoR(solicitud:Solicitud):void{
  
  this.solicitudService.updateSolicitud(solicitud.id_solicitud, solicitud).subscribe(res => {
  
    if(res){
      
    alert('Datos guardados!, los datos han sido guardados con exito.')
      this.clear();
      
        this.onDataTable();
      
     
    } else {
      alert('Error! :(')
    }
  });

}


onUpdateSalida(solicitud:Solicitud):void{
  
  this.solicitudService.updateSolicitud(solicitud.id_solicitud, solicitud).subscribe(res => {
  
    if(res){
      alert('Datos guardados!, los datos han sido guardados con exito.')
  
      this.clear();
      this.onDataTable();
    } else {
      alert('Error! :(')
    }
  });
}
clear(){
  this.solicitud.id_solicitud=0;
  this.solicitud.fechaRegreso = "";
}
onSetData(select:any){
  
  this.solicitud.id_solicitud=select.id_solicitud
  this.solicitud.fechaSolicitud=select.fechaSolicitud
  this.solicitud.nombreproveedor=select.nombreproveedor
  this.solicitud.motivo=select.motivo
  this.solicitud.cantidad=select.cantidad
  this.solicitud.unidadMedida=select.unidadMedida
  this.solicitud.area=select.area
  this.solicitud.descripcion=select.descripcion
  this.solicitud.observaciones=select.observaciones
  this.solicitud.autorizador=select.autorizador
  this.solicitud.statusAprobacion=select.statusAprobacion
  this.solicitud.comentariosAutorizador=select.comentariosAutorizador
  this.solicitud.fechaSalida=select.fechaSalida
  this.solicitud.nombreProvedor=select.nombreProvedor
  this.solicitud.comentariosCompras=select.comentariosCompras
  this.solicitud.fechaRegreso=select.fechaRegreso
  this.solicitud.status2=select.status2
  this.solicitud.status2="En progreso";
  this.solicitud.validarSalida=select.validarSalida
  this.solicitud.fechaCompromiso=select.fechaCompromiso
  this.solicitud.comentariosRegreso=select.comentariosRegreso
  this.solicitud.correoSolicitante=select.correoSolicitante
  this.solicitud.emailSent=select.emailSent
  
 
}
onSetDataRegreso(select:any){
  
  this.solicitud.id_solicitud=select.id_solicitud;
  this.solicitud.solicitante=select.solicitante;
  this.solicitud.fechaSolicitud=select.fechaSalida;
  this.solicitud.nombreproveedor=select.nombreproveedor;
  this.solicitud.motivo=select.motivo;
  this.solicitud.cantidad=select.cantidad;
  this.solicitud.unidadMedida=select.unidadMedida;
  this.solicitud.area=select.area;
  this.solicitud.descripcion=select.descripcion;
  this.solicitud.observaciones=select.observaciones;
  this.solicitud.autorizador=select.autorizador;
  this.solicitud.fechaSalida=select.fechaSalida;
  this.solicitud.nombreProvedor=select.nombreProvedor;
  this.solicitud.comentariosCompras=select.comentariosCompras;
  this.solicitud.fechaRegreso=select.fechaRegreso;
  this.solicitud.status2="Finalizado";
 
}

openModal(template: TemplateRef<any>){
  this.bsModalRef=this.modalService.show(template);
}

openModal1(template1: TemplateRef<any>){
  this.bsModalRef=this.modalService.show(template1);
}
saveSomeThing() {
  // confirm or save something
  this.bsModalRef.hide();
}//4

}


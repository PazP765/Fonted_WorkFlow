import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { buffer } from 'rxjs';

import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service'; 

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
  constructor(private solicitudService:SolicitudService) { }
  saveSomeThing() {
    // confirm or save something
    this.formModal.hide();
  }//4
cambiotitle(){
 
}



  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );//2
    
    this.onDataTable();
  }
  openFormModalSA() {
      this.titles="Salida de activo"
      console.log(this.titles)
      this.formModal.show();
   }//3


  openFormModalRA() {
        this.titles="Regreso de activo"
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
  console.log("a",res);
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
  this.solicitud.id_solicitud=select.id_solicitud;
  this.solicitud.solicitante=select.solicitante;
  this.solicitud.fechaSolicitud=select.fechaSalida;
  this.solicitud.para=select.para;
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
}


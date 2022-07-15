import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service'; 
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  solicitud:Solicitud = new Solicitud();
  datatable:any=[];
  title:any="";
  constructor(private solicitudService:SolicitudService) { 

  }

  ngOnInit(): void {
    this.onDataTable();
  }
  onDataTable()
{
this.solicitudService.getSolicitud().subscribe(res=>{
  this.datatable=res;
  console.log(res);
});
}

onAddSolicitud(solicitud:Solicitud):void{
  console.log("hola")
  this.solicitudService.addSolicitud(solicitud).subscribe(res => {
    if(res){
      console.log("hola2")
      alert(`La solicitud${this.solicitud.id_solicitud} se ha registrado con exito!`);
      this.clear();
      this.onDataTable();
    } else {
      alert('Error! :(')
      console.log("hola3")
    }
  });
}
//
onUpdateMascota(solicitud:Solicitud):void{
  this.solicitudService.updateSolicitud(solicitud.id_solicitud, solicitud).subscribe(res => {
    if(res){
      alert(`La solicitud número ${solicitud.id_solicitud} se ha modificado con exito!`);
      this.clear();
      this.onDataTable();
    } else {
      alert('Error! :(')
    }
  });
}

onDeleteMascota(id:number):void{
  this.solicitudService.deleteSolicitud(id).subscribe(res => {
    if(res){
      alert(`La solicitud número ${id} se ha eliminado con exito!`);
      this.clear();
      this.onDataTable();
    } else {
      alert('Error! :(')
    }
  });
}
//

onSetData(select : any){
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
this.solicitud.status2=select.status2;

}

clear(){

  this.solicitud.solicitante="";
  this.solicitud.fechaSolicitud="";
  this.solicitud.para="";
  this.solicitud.motivo="";
  this.solicitud.cantidad=1;
  this.solicitud.unidadMedida="";
  this.solicitud.area="";
  this.solicitud.descripcion="";
  this.solicitud.observaciones="";
  this.solicitud.autorizador="";
  this.solicitud.fechaSalida="";
  this.solicitud.nombreProvedor="";
  this.solicitud.comentariosCompras="";
  this.solicitud.fechaRegreso="";
  this.solicitud.status2="";
}


}
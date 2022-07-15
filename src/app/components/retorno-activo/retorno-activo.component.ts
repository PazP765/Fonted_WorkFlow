import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service'; 
declare var window: any;
@Component({
  selector: 'app-retorno-activo',
  templateUrl: './retorno-activo.component.html',
  styleUrls: ['./retorno-activo.component.css']
})
export class RetornoActivoComponent implements OnInit {

  solicitud:Solicitud = new Solicitud();
  datatable:any=[];
  title:any="";
  formModal: any;//1
  constructor(private solicitudService:SolicitudService) { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );//2
    this.onDataTable();
  }
  openFormModal() {
    this.formModal.show();
  }//3
  saveSomeThing() {
    // confirm or save something
    this.formModal.hide();
  }//4
  onDataTable()
{
this.solicitudService.getSolicitud().subscribe(res=>{
  this.datatable=res;
  console.log(res);
});

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

onUpdateActivoR(solicitud:Solicitud):void{
  
  this.solicitudService.updateSolicitud(solicitud.id_solicitud, solicitud).subscribe(res => {
  
    if(res){
    alert('1234')
  
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
}








  
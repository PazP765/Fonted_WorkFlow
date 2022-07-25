import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-vista-general',
  templateUrl: './vista-general.component.html',
  styleUrls: ['./vista-general.component.css']
})
export class VistaGeneralComponent implements OnInit {
  datatable:any=[];
  solicitudesDetails:Solicitud={
    id_solicitud: 0,
    solicitante: "",
    fechaSolicitud: "",
    nombreproveedor: "",
    motivo: "",
    cantidad: 1,
    unidadMedida: "",
    area: "",
    descripcion: "",
    observaciones: "",
    autorizador: "",
    comentariosAutorizador: "",
    fechaSalida: "",
    nombreProvedor: "",
    comentariosCompras: "",
    fechaRegreso: "",
    status2: "",
    regresa: '',
    validarSalida: '',
    fechaCompromiso: '',
    correoSolicitante: '',
    comentariosRegreso: '',
    emailSent: '',
    statusAprobacion:'' 
  }
  constructor(private route:ActivatedRoute,private solicitudService:SolicitudService,private _CargarScripts:CargarScriptsService) {_CargarScripts.carga(["tablaG"]) }

 
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
onDeleteServ(id_Solicitud:number):void{
 
  this.solicitudService.deleteSolicitud(id_Solicitud).subscribe(res => {
    if(res){
      this.onDataTable();
    } else {
      alert('Error! :(')
    }
  });
}
onUpdateMonitoreoC(solicitud:Solicitud):void{
  this.solicitudService.updateSolicitud(solicitud.id_solicitud, solicitud).subscribe(res => {
    if(res){
      // this.toastr.info(`La persona número ${solicitud.id} se ha modificado con exito!`);
  
      
      this.onDataTable();
    } else {
      alert('Error! :(')
    }
  });
}


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service'; 
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  solicitud:Solicitud = new Solicitud();
  datatable:any=[];
  title:any="";
  solicitudesDetails:Solicitud={
    id_solicitud:0,
    solicitante:"",
    fechaSolicitud:"",
    para:"",
    motivo:"",
    cantidad:1,
    unidadMedida:"",
    area:"",
    descripcion:"",
    observaciones:"",
    autorizador:"",
    comentariosAutorizador:"",//
    fechaSalida: "",
    nombreProvedor:"",
    comentariosCompras:"",//
    fechaRegreso: "",
    status2:""    
  }
  constructor(private route:ActivatedRoute,private solicitudService:SolicitudService) { }

  ngOnInit(): void {
//     this.route.paramMap.subscribe({
//       next:(params)=>{
//         const id1 = params.get('id_solicitud');
//         if(id1){
// this.solicitudService.getByIdSolicitud(id1)
// .subscribe({
//   next:(response)=>{
// this.solicitudesDetails=response;
//   }
// })
//         }
//       }
//     });
//     this.onDataTable();
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
onSetData(select : any){
this.solicitud.id_solicitud=select.id_solicitud;
this.solicitud.solicitante=select.solicitante;
this.solicitud.id_solicitud=select.para;
this.solicitud.id_solicitud=select.motivo;
this.solicitud.id_solicitud=select.cantidad;
this.solicitud.id_solicitud=select.unidadMedida;
this.solicitud.id_solicitud=select.area;
this.solicitud.id_solicitud=select.descripcion;
this.solicitud.id_solicitud=select.observaciones;
this.solicitud.id_solicitud=select.autorizador;
this.solicitud.id_solicitud=select.fechaSalida;
this.solicitud.id_solicitud=select.nombreProvedor;
this.solicitud.id_solicitud=select.comentariosCompras;
this.solicitud.id_solicitud=select.fechaRegreso;
this.solicitud.id_solicitud=select.status2;

}
}


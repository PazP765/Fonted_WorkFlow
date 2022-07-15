import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service'; 
@Component({
  selector: 'app-autorizar',
  templateUrl: './autorizar.component.html',
  styleUrls: ['./autorizar.component.css']
})
export class AutorizarComponent implements OnInit {
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
    
    this.onDataTable();
  }
  onDataTable()
{
//   this.route.paramMap.subscribe({
//     next:(params)=>{
//       const id1 = params.get('id_Solicitud');
//       if(id1){
// this.solicitudService.getByIdSolicitud()
// .subscribe({
// next:(response)=>{
// this.solicitudesDetails=response;
// }
// })
//       }
//     }
//   });


  
// this.solicitudService.getSolicitud().subscribe(res=>{
//   this.datatable=res;
//   console.log(res);
// });

}
}
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service'; 
//importamos los modulos para formularios
//import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-autorizar',
  templateUrl: './autorizar.component.html',
  styleUrls: ['./autorizar.component.css']
})
export class AutorizarComponent implements OnInit {
  solicitud:Solicitud = new Solicitud();
  //public editForm: FormGroup;
  postRef:any;
  datatable:any=[];
  //arreglo
 Serv:Solicitud={
  id_solicitud:0,
  solicitante:'',
  fechaSolicitud:'',
  para:'',
  motivo:'',
  cantidad:0,
  unidadMedida:'',
  area:'',
  descripcion:'',
  observaciones:'',
  autorizador:'',
  comentariosAutorizador:'',
  fechaSalida: '',
  nombreProvedor:'',
  comentariosCompras:'',
  fechaRegreso:'',
  status2:''
 };
  constructor( 
    public solicitudService:SolicitudService,
    //public formBuilder:FormBuilder,
    private activeRoute: ActivatedRoute,
    //private router: Router,
    
    
    ) { 
    // this.editForm = this.formBuilder.group({
    //   id_solicitud: [''],
    //   fechaSolicitud: [''],
    //   para: [''],
    //   motivo: [''],
    //   cantidad: [''],
    //   unidadMedida: [''],
    //   area: [''],
    //   observaciones: [''],
    // })
  }

  ngOnInit(): void {
    
this.activeRoute.paramMap.subscribe({
  next:(params)=>{
    const id = params.get('id')

    if(id){
      this.solicitudService.getByIdSolicitud(id)
      .subscribe({
next:response => {
this.datatable=response;
console.log("b",this.datatable)

}
      });
    }
  }
  
})

   }
//cvcxzv
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
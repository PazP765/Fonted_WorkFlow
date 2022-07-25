import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.css']
})
export class MostrarDatosComponent implements OnInit {
  solicitud:Solicitud = new Solicitud();
  //public editForm: FormGroup;
  postRef:any;
  datatable:any=[];
  //arreglo
 Serv:Solicitud={
   id_solicitud: 0,
   solicitante: '',
   fechaSolicitud: '',
   nombreproveedor: '',
   motivo: '',
   cantidad: 0,
   unidadMedida: '',
   area: '',
   descripcion: '',
   observaciones: '',
   autorizador: '',
   comentariosAutorizador: '',
   fechaSalida: '',
   nombreProvedor: '',
   comentariosCompras: '',
   fechaRegreso: '',
   status2: '',
   regresa: '',
   validarSalida: '',
   fechaCompromiso: '',
   comentariosRegreso: '',
   correoSolicitante: '',
   emailSent: '',
   statusAprobacion: ''
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
   rechaza(){

   }
   acepta(){

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
//cvcxzv
onDataTable()
{
this.solicitudService.getSolicitud().subscribe(res=>{
  
  this.datatable=res;
  console.log("a",res, this.solicitud.status2);
});

}

onSetData(solicitud:Solicitud):void{
  this.solicitudService.updateSolicitud(solicitud.id_solicitud, solicitud).subscribe(res => {

    if(res){

  if((document.getElementById("aprobado") as HTMLInputElement).click){

    solicitud.statusAprobacion=(document.getElementById("aprobado") as HTMLInputElement).value
    this.onDataTable();
  }}
});

}

}

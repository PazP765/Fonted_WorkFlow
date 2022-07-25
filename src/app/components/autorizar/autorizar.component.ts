import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service'; 
//importamos los modulos para formularios
//import { FormBuilder, FormGroup } from '@angular/forms';
declare var window: any;
@Component({
  selector: 'app-autorizar',
  templateUrl: './autorizar.component.html',
  styleUrls: ['./autorizar.component.css']
})
export class AutorizarComponent implements OnInit {
  formModal: any;//1
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
   historialCompras:"",
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
    public route: ActivatedRoute,
    private router: Router,
    
    
    ) { 
  
  }
  saveSomeThingSA() {
    // confirm or save something
    this.formModal.hide();
  }//4
  ngOnInit(): void {

    this.route.paramMap.subscribe({
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


    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id')
       if(id){
        this.solicitudService.getByIdSolicitud(id)
        .subscribe({
          next: (response)=>{
this.Serv=response;
          }
        })
       }
      }
    })
}

// update(){
 
// this.solicitudService.updateSolicitud1(this.Serv.id_solicitud, this.datatable)
// .subscribe({
//   next:(res)=>{
 
//   }
// })
// }

// onUpdateMascota(solicitud:Solicitud):void{
//   solicitud.id_solicitud=parseInt((document.getElementById("id") as HTMLInputElement).value)
//   console.log("cccc",solicitud.id_solicitud)
//   this.solicitudService.updateSolicitud(solicitud.id_solicitud, solicitud).subscribe(res => {
//     if(res){
//       alert(`La mascota número ${solicitud.id_solicitud} se ha modificado con exito!`);
    
//     } else {
//       alert('Error! :(')
//     }
//   });
// }


}
import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service'; 
declare var window: any;
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-monitoreo-compras',
  templateUrl: './monitoreo-compras.component.html',
  styleUrls: ['./monitoreo-compras.component.css']
})
export class MonitoreoComprasComponent implements OnInit {
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


onUpdateMonitoreoC(solicitud:Solicitud):void{
  this.solicitudService.updateSolicitud(solicitud.id_solicitud, solicitud).subscribe(res => {
    if(res){
      // this.toastr.info(`La persona número ${solicitud.id} se ha modificado con exito!`);
  
      this.clear();
      this.onDataTable();
    } else {
      alert('Error! :(')
    }
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
  this.solicitud.status2=select.status2;

 
}
name = 'DATA.xlsx';
  exportToExcel(): void {
    let element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }
clear(){
  this.solicitud.id_solicitud=0;
  this.solicitud.comentariosCompras = "";
}
}




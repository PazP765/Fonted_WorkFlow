import { Component } from '@angular/core';
import { Solicitud } from './models/solicitud';
import { SolicitudService } from './services/solicitud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  solicitud:Solicitud = new Solicitud();
  datatable:any=[];
  title:any="";

constructor(private solicitudService:SolicitudService){
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
}

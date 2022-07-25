import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Solicitud } from '../models/solicitud';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private http:HttpClient) { }
  
   //url:string="http://172.16.200.65:8085/api/Solicitud";
 url:string="http://172.16.200.93:8083/Api/Solicitud";
  //url:string="http://https://172.16.200.24:44347/api/Solicitud";
  getSolicitud(){
    return this.http.get(this.url);
  }
  
    addSolicitud(solicitud:Solicitud):Observable<Solicitud>{
      return this.http.post<Solicitud>(this.url,solicitud);
    }

    updateSolicitud(id_Solicitud:number, solicitud:Solicitud):Observable<Solicitud>{
      return this.http.put<Solicitud>(this.url+`/${id_Solicitud}`,solicitud);
    }
    deleteSolicitud(id_Solicitud:number){
      return this.http.delete(this.url + `/${id_Solicitud}`);
    }
    getByIdSolicitud(id_Solicitud:string):Observable<Solicitud>{
      return this.http.get<Solicitud>(this.url+`/${id_Solicitud}`);
    }
  }


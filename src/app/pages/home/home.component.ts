import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public user="";
public pass="";
  constructor(private _CargarScripts:CargarScriptsService, public router:Router) {_CargarScripts.carga(["login"]) }

  ngOnInit(): void {
    
  }
iniciarSesion(){
if(this.user==="admin"&& this.pass==="admin"){
  this.router.navigate(["http://172.16.200.74:4200/manager"]);
}
}
}

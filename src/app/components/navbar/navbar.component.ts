import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public cambio="";
  constructor() { }

  ngOnInit(): void {
    
    
  }
carga(){
if(document.getElementById('formulario')){
  this.cambio="formulario para solicitud"
}
}
}

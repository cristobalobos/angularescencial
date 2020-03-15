// se importan funcionalidades de nuestra aplicacion
import { Component, OnInit } from '@angular/core';

// son los decorator que configuran las propiedades del componente
@Component({
  selector: 'app-aleatorio',
  templateUrl: './aleatorio.component.html',
  styleUrls: ['./aleatorio.component.css']
})

export class AleatorioComponent implements OnInit {

  aleatorio:number = Math.floor( Math.random()*100);
  constructor() { }

  ngOnInit(): void {
  }

}

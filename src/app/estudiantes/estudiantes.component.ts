import { Component } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {

  listadoEstudiantes:any[]=[
    {nombre: "Gabriel Chavez", estado:"Regular"},
    {nombre: "Juan Chavez", estado:"Promocionado"},
    {nombre: "Ana Chavez", estado:"Recursante"},
  ]

  mostrar:boolean=true;
  mostrarNoMostrar(){
    this.mostrar=!this.mostrar;
  }

}

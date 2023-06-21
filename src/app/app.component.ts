import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Santiago Aristizabal';
  textPlaceholder = "Escriba su nombre a aquí";
  deshabilitado:boolean = true;
  img:string = "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/03/Spotify-Logo-Green-Black.jpg?fit=2000%2C1333&quality=50&strip=all&ssl=1"

  constructor(){
    setInterval(()=>this.deshabilitado=false,3000);
  }

  getSuma( num:number, num2:number ){
    return num + num2;
  }
}

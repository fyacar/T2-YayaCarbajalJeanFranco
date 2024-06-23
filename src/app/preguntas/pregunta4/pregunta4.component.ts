import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta4',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './pregunta4.component.html',
  styleUrl: './pregunta4.component.css'
})
export class Pregunta4Component {

  resultado: string = "";

  vehiculos: string[] = ["Camion", "Autobus", "Turismo","Motocicleta"];

  testAlcoholemia(vehiculo: HTMLInputElement, tasa: HTMLInputElement){
    let vehicul = vehiculo.value
    let tas = parseFloat(tasa.value)
    if (vehicul === "Camion" || vehicul ==="Autobus") {
      if(tas >0.3){
        this.resultado = "Positivo"
      }    
  }  else if (vehicul === "Turismo" || vehicul ==="Motocicleta") {
    if(tas >0.5){
      this.resultado = "Positivo"
    }
} else {
  this.resultado = "Nevativo"
} 

}

}

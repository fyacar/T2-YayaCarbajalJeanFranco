import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [CommonModule ,MaterialModule],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component {
   utilidad: number = 0;

  calcularSalario(salario: HTMLInputElement, tiempo: HTMLInputElement):void{
      let porcentajeUtilidad;
      const time = parseInt(tiempo.value)
      const mensualidad = parseInt(salario.value)

      if (time < 1) {
        porcentajeUtilidad = 0.05;
    } else if (time >= 1 && time < 2) {
        porcentajeUtilidad = 0.07;
    } else if (time >= 2 && time < 5) {
        porcentajeUtilidad = 0.10;
    } else if (time >= 5 && time < 10) {
        porcentajeUtilidad = 0.15;
    } else {
        porcentajeUtilidad = 0.20;
    }

    this.utilidad = mensualidad * porcentajeUtilidad;


   }
}

import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component {

  costoFinal: number = 0;

  costoTotal(cantidadCursos: HTMLInputElement){
    const cantCursos = parseInt(cantidadCursos.value)
    if (cantCursos > 5) {
      this.costoFinal = 520*0.9
  } else {
      this.costoFinal = 520;
  } 
  }
}


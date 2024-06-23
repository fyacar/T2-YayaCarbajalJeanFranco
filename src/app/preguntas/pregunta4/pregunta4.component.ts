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

  vehiculos: string[] = ["Camión", "Autobús", "Turismo","Motocicleta"];

}

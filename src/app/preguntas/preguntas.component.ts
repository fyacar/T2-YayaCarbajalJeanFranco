import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-preguntas',
  standalone: true,
  imports: [RouterOutlet,MaterialModule],
  templateUrl: './preguntas.component.html',
  styleUrl: './preguntas.component.css'
})
export class PreguntasComponent {

  constructor(private router: Router, private route:ActivatedRoute, private authService:AuthService){}

  irPregunta2():void{
    this.router.navigate(["pregunta2"],{relativeTo: this.route})
  }
  irPregunta3():void{
    console.log("método IrCurso")
    this.router.navigate(["pregunta3"],{relativeTo: this.route})

  }
  irPregunta4():void{
    this.router.navigate(["pregunta4"],{relativeTo: this.route})
  }

  salir():void{ 
    this.authService.logout()
    this.router.navigateByUrl("/login")
    
  }


}

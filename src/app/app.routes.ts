import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { Pregunta2Component } from './preguntas/pregunta2/pregunta2.component';
import { Pregunta3Component } from './preguntas/pregunta3/pregunta3.component';
import { Pregunta4Component } from './preguntas/pregunta4/pregunta4.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: "login", component: LoginComponent},
    { path: "preguntas", component: PreguntasComponent,
        canActivate:[authGuard],
        children: [
            {path:"pregunta2", component: Pregunta2Component},
            {path:"pregunta3", component: Pregunta3Component},
            {path:"pregunta4", component: Pregunta4Component},
            
        ] }, 
    {path:"", redirectTo: "login", pathMatch: "full"}
];

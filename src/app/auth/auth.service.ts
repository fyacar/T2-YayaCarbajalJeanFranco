import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(usuario: string, password: string){
    sessionStorage.setItem("isLogged",usuario);    
  }

  logout():void{
    sessionStorage.clear()
  }

  isLogged():boolean{    
    return !!sessionStorage.getItem("isLogged")
  }
}

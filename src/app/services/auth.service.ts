import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  eAutenticado(){
    return !!localStorage.getItem('token')
  }
}

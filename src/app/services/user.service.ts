import { HttpClient, HttpHeaders } from '@angular/common/http'; //Import do http client
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';//Requisições assincronas
import { User } from '../Models/user'; //Improt do userModel


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    /*Injeção de dependência do modulo http client */
    private httpClient: HttpClient
  ) { }

  urlLogin = 'http://localhost:3000/signin'

  // Post de Login , Logar usúario - Insominia , Requisição post \ Deve receber o usuario
  logarUsuario(usuario: User): Observable<any> {
    return this.httpClient.post(this.urlLogin, JSON.stringify(usuario), {
      headers: new HttpHeaders({ "Content-Type": "application/Json" }),
      observe: 'response'
    })
  }
}

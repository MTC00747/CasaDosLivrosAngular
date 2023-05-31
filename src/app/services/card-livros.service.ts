import { ChangeDetectorRef, Injectable, Input } from '@angular/core';
import { Livros } from '../Models/livros';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CardLivrosService {

  urlLogin = 'http://localhost:5128/api/Livros'
  token = localStorage.getItem('token')

  //Array para carrinho 
  AtualizarItem : Livros[] = []
  itemsCarrinho: any[] = []

  valorTotalProduto: number = 0
  quantidade: number = 0

  constructor(private route : Router, private livro: Livros, private http: HttpClient) {

  }
  exibirProdutos() {
    this.itemsCarrinho.forEach(livro => {
      this.livro.imagem = livro.imagem
      this.livro.titulo = livro.titulo
      this.livro.preco = livro.precos
      this.livro.quantidadeLivros = livro.quantidade
    })
  }
  calcularValorTotal() {
    this.valorTotalProduto = this.itemsCarrinho.reduce((acc, livro: Livros) => {
      return acc + (livro.quantidadeLivros * livro.preco)
    }, 0);
  }

  cadastrarLivro(livro: Livros): Observable<any> {

    return this.http.post(this.urlLogin, JSON.stringify(livro), {
      headers: new HttpHeaders(
        {
          "content-type": "application/json",
          "Authorization": `Bearer ${this.token}`
        }
      ),
      observe: 'response'
    }
    )
  }

  listarLivros(livro: Livros): Observable<any> {
    return this.http.get(this.urlLogin,{
      headers: new HttpHeaders(
        {
          "content-type": "application/json"
        }
      ), observe: 'response'
    }
    )
  }
  listarLivroPorId(livro : Livros, id : number): Observable<any>{
    return this.http.get(`${this.urlLogin}/${id}`,{
      headers: new HttpHeaders(
        {
          "content-type": "application/json",
          "Authorization": `Bearer ${this.token}`
        }
      ), observe: 'response'
    }
    )
  }

  removerLivro(id:number){
   return this.http.delete(`${this.urlLogin}/${id}`, {
      headers: new HttpHeaders(
        {
          "content-type": "application/json",
          "Authorization": `Bearer ${this.token}`
        }
      ),
      observe: 'response'
    }
   ).subscribe(
      ()=>{
        this.route.navigate(['/removido-sucesso'])
        console.log("Deu certo")
      }, (error) => {
        console.log("Deu errado")
      }
    )
  }

  modificarLivro(livro : Livros, id :number) : Observable<any> {
    return this.http.put(`${this.urlLogin}/${id}`, JSON.stringify(livro), {

      headers: new HttpHeaders(
        {
          "content-type": "application/json",
          "Authorization": `Bearer ${this.token}`
        }
      ),
      observe: 'response'
    })
  }
}

import { ChangeDetectorRef, Injectable, Input } from '@angular/core';
import { Livros } from '../Models/livros';

@Injectable({
  providedIn: 'root'
})
export class CardLivrosService {
  //Array para carrinho 

  itemsCarrinho: any[] = []

  valorTotalProduto: number = 0
  quantidade: number = 0

  constructor(private livro: Livros) {

  }
  exibirProdutos() {
    this.itemsCarrinho.forEach(livro => {
      this.livro.imagem = livro.imagem
      this.livro.titulo = livro.titulo
      this.livro.preco = livro.precos
      this.livro.quantidadeLivros = livro.quantidade
    })
  }
  calcularValorTotal(){
    this.valorTotalProduto = this.itemsCarrinho.reduce((acc, livro: Livros) =>{
      return acc + (livro.quantidadeLivros * livro.preco) 
    },0);
  }
}

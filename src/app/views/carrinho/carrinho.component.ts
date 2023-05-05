import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
import { CardLivrosService } from 'src/app/services/card-livros.service';
import { Livros } from 'src/app/Models/livros';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],


})

export class CarrinhoComponent implements OnInit {
  Carrinho = false;
  carrinhoProdutos: any[] = [];
  

  constructor(private cardLivros: CardLivrosService, private livro: Livros) {
    this.carrinhoProdutos = this.cardLivros.itemsCarrinho
  }

  ngOnInit(): void {

    
  }
  exibirCarrinho() {
   
    if (!this.Carrinho) {
      this.Carrinho = true;
    } else {
      this.Carrinho = false
    }
    this.carrinhoProdutos.forEach(livro => {
      this.livro.imagem = livro
      this.livro.titulo = livro
      this.livro.preco = livro
    })
  }
  

  removerItem(index: any) {
    this.carrinhoProdutos.splice(index, 1)
  }
  fecharCarrinho() {
    this.Carrinho = false
  }

}

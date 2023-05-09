import { ChangeDetectorRef, Component, OnInit, } from '@angular/core';
import { CardLivrosService } from 'src/app/services/card-livros.service';
import { Livros } from 'src/app/Models/livros';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})

export class CarrinhoComponent implements OnInit {

  Carrinho = false;
  carrinhoProdutos: Livros[] = [];
  precoTotal: number = 0
  quantidade: number = 0
  

  constructor(private carrinhoService: CardLivrosService, private livro: Livros) {
    this.carrinhoProdutos = this.carrinhoService.itemsCarrinho

  }
  ngOnInit(): void {

  }

  exibirCarrinho() {
    if (!this.Carrinho) {
      this.Carrinho = true;
    } else {
      this.Carrinho = false
    }
    this.calcularValorTotal()
  }
  removerItem(index: any) {
    this.carrinhoProdutos.splice(index, 1)
    this.carrinhoService.calcularValorTotal()
  }
  fecharCarrinho() {
    this.Carrinho = false
  }
  calcularValorTotal() {
    this.carrinhoService.calcularValorTotal()
    this.precoTotal = this.carrinhoService.valorTotalProduto;
  }
  limparCarrinho(){
    this.carrinhoProdutos = []
    this.precoTotal = 0
  }
}


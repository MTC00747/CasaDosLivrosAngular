import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardLivrosService } from 'src/app/services/card-livros.service';
import { Livros } from 'src/app/Models/livros';



@Component({
  selector: 'app-card-livro',
  templateUrl: './card-livro.component.html',
  styleUrls: ['./card-livro.component.css'],
})
export class CardLivroComponent implements OnInit {
  //Criando propriedades do card-livro 
  livros: Livros[] = []; //Criando array que vai receber os livros do back-end

  //Setando arrays para filtro de categorias
  informatica: any[] = [];
  portugues: any[] = []

  //Setando Array para slide
  livrosVisiveis: Livros[] = []
  livrosVisiveisPortugues: Livros[] = []


  startIndex: number = 0;
  endIndex: number = 5;


  constructor(private http: HttpClient, private livro: Livros, private carrinhoService: CardLivrosService) {

  }

  ngOnInit(): void {
    this.carregarLivros();
  }
  carregarLivros() {
    return this.http.get<any[]>("http://localhost:5128/api/Livros").subscribe(
      (response: any[]) => {
        this.livros = response;
        //Filtra os livros que são da categoria informatica 
        this.portugues = this.livros.filter(item => {
          return item.categoria === "Português"
        })
        this.livrosVisiveisPortugues = this.portugues.slice(0, 5);
        this.portugues.forEach(livroPortugues => {
          this.livro.titulo = livroPortugues
          this.livro.quantidadePaginas = livroPortugues
          this.livro.classificacao = livroPortugues
          this.livro.preco = livroPortugues
          this.livro.disponivel = livroPortugues
          this.livro.categoria = livroPortugues
          this.livro.imagem = livroPortugues
          this.livro.id = livroPortugues
        })
        //Filtra os livros que são da categoria informatica 
        this.informatica = this.livros.filter(item => {
          return item.categoria === "Informatica"
        })
        this.livrosVisiveis = this.informatica.slice(0, 5);
        this.informatica.forEach(livroInformatica => {
          this.livro.titulo = livroInformatica
          this.livro.quantidadePaginas = livroInformatica
          this.livro.classificacao = livroInformatica
          this.livro.preco = livroInformatica
          this.livro.disponivel = livroInformatica
          this.livro.categoria = livroInformatica
          this.livro.imagem = livroInformatica
          this.livro.id = livroInformatica

        },
          (error: any) => {
            console.log(error)
          }
        )
      }
    )
  }

  //Função para o slide
  proximoCardInformatica() {
    this.startIndex += 1; // startIndex inicia com 0, ou seja  0 livros, após a função ser chamada, ele adiciona um ao final e um ao começo 
    this.endIndex += 1;// endIndex  inicia com 4, ou seja  4 livros, após a função ser chamada, ele adiciona um ao final e um ao começo 
    this.livrosVisiveis = this.informatica.slice(this.startIndex, this.endIndex);
  }
  proximoCardPortugues() {
    this.startIndex += 1; // startIndex inicia com 0, ou seja  0 livros, após a função ser chamada, ele adiciona um ao final e um ao começo 
    this.endIndex += 1;// endIndex  inicia com 4, ou seja  4 livros, após a função ser chamada, ele adiciona um ao final e um ao começo 
    this.livrosVisiveisPortugues = this.portugues.slice(this.startIndex, this.endIndex);
  }

  anteriorCardInfo() {
    this.startIndex -= 1;
    this.endIndex -= 1
    this.livrosVisiveis = this.informatica.slice(this.startIndex, this.endIndex)
  }
  anteriorCardPortugues() {
    this.startIndex -= 1;
    this.endIndex -= 1
    this.livrosVisiveisPortugues = this.portugues.slice(this.startIndex, this.endIndex)
  }

  adicionarAoCarrinhoLivrosInformatica(i:number) {

    const itemExistente: Livros = this.carrinhoService.itemsCarrinho.find(item => item.id === this.livrosVisiveis[i].id)
    
    if(itemExistente) {
      alert("Este item já foi adicionado ao carrinho, defina a quantidade.")
    }else{
    this.carrinhoService.itemsCarrinho.push(this.livrosVisiveis[i])
    }
    
  }
  adicionarAoCarrinhoLivrosPortugues(i:number) {
    const itemExistente: Livros = this.carrinhoService.itemsCarrinho.find(item => item.id === this.livrosVisiveisPortugues[i].id)
    
    if(itemExistente) {
      alert("Este item já foi adicionado ao carrinho, defina a quantidade.")
    }else{
      this.carrinhoService.itemsCarrinho.push(this.livrosVisiveisPortugues[i])
    }
  }
}


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Livros } from 'src/app/Models/livros';



@Component({
  selector: 'app-card-livro',
  templateUrl: './card-livro.component.html',
  styleUrls: ['./card-livro.component.css']
})
export class CardLivroComponent implements OnInit {

  //Criando propriedades do card-livro 

 livros: any[] = []; //Criando array que vai receber os livros do back-end
 livrosVisiveis: any[] = []

  image: string = "https://st2.depositphotos.com/2769299/7063/i/600/depositphotos_70637161-stock-photo-books-on-wooden-desk.jpg"
 
  startIndex: number = 0;
  endIndex: number = 4;
  translateValue: number = 0
  
  constructor(private http: HttpClient, private livro : Livros) {
    
   }

  ngOnInit(): void {
    this.getLivros();
    
  }
  getLivros() {
    return this.http.get<any[]>("http://localhost:5128/api/Livros").subscribe(
      (response: any[]) => {
        this.livros = response;
        this.livrosVisiveis = this.livros.slice(0,4);
        console.log(response);
        this.livros.forEach(livro => {
          this.livro.titulo= livro
          this.livro.quantidadePaginas = livro
          this.livro.classificacao = livro
          this.livro.preco = livro
          this.livro.disponivel = livro
        },
          (error: any) => {
            console.log(error)
          }
        )
      }
    )
  }

  //Função para o slide
  proximoCard() {
    this.startIndex += 1; // startIndex inicia com 0, ou seja  0 livros, após a função ser chamada, ele adiciona um ao final e um ao começo 
    this.endIndex += 1;// endIndex  inicia com 4, ou seja  4 livros, após a função ser chamada, ele adiciona um ao final e um ao começo 
    this.livrosVisiveis = this.livros.slice(this.startIndex, this.endIndex);
    this.translateValue -= 400; // ajuste esse valor para a largura do item do carrossel
  }
  anteriorCard(){
    this.startIndex -= 1; 
    this.endIndex -=1
    this.livrosVisiveis = this.livros.slice(this.startIndex, this.endIndex)
    this.translateValue -= 400
  }
}


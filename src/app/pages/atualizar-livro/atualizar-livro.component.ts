import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livros } from 'src/app/Models/livros';
import { CardLivrosService } from 'src/app/services/card-livros.service';

@Component({
  selector: 'app-atualizar-livro',
  templateUrl: './atualizar-livro.component.html',
  styleUrls: ['./atualizar-livro.component.css']
})
export class AtualizarLivroComponent implements OnInit {
  novoLivro = {
    preco: 0,
    titulo: "",
    categoria: "",
    imagem: "",
    id: 0,
    quantidadeLivros: 0,
    quantidadePaginas: 0,
    disponivel: false,

  }
  livroAtualizar : Livros []= []
  constructor(private livroService : CardLivrosService, private livro : Livros, private route : Router) {
    this.novoLivro.categoria = this.livro.categoria
    this.novoLivro.disponivel = this.livro.disponivel
    this.novoLivro.imagem = this.livro.imagem
    this.novoLivro.preco = this.livro.preco
    this.novoLivro.quantidadePaginas = this.livro.quantidadePaginas
    this.novoLivro.titulo = this.livro.titulo
    console.log(this.livroService.AtualizarItem)
    this.livroAtualizar = this.livroService.AtualizarItem
   }

  ngOnInit(): void {
    console.log(this.livroAtualizar)
    this.livroAtualizar = [{
      preco: 120, 
      titulo:'teste', 
      categoria:'informatica',
      imagem: 'sssssssdada',
      id:1,
      quantidadeLivros : 1,
      quantidadePaginas : 2,
      disponivel: false

    }]
    
  }

  salvarAlteracoes(id : number){
    return this.livroService.modificarLivro(this.novoLivro, id).subscribe({
      next: (response: any) => {
        this.route.navigate(['/sucesso'])
        console.log("deu certo!")
      },
      error: (err: { error: string; }) => {
        console.log("Deu Erro!")
        console.log(err)
      },
    })
}
}

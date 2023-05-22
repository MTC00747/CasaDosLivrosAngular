import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livros } from 'src/app/Models/livros';
import { CardLivrosService } from 'src/app/services/card-livros.service';

@Component({
  selector: 'app-adicionar-livro',
  templateUrl: './adicionar-livro.component.html',
  styleUrls: ['./adicionar-livro.component.css']
})
export class AdicionarLivroComponent implements OnInit {

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

  token = localStorage.getItem('token')

  constructor(private livro: Livros, private livroSevice: CardLivrosService, private route: Router) {

    this.novoLivro.categoria = this.livro.categoria
    this.novoLivro.disponivel = this.livro.disponivel
    this.novoLivro.imagem = this.livro.imagem
    this.novoLivro.preco = this.livro.preco
    this.novoLivro.quantidadePaginas = this.livro.quantidadePaginas
    this.novoLivro.titulo = this.livro.titulo

  }



  ngOnInit(): void {

  }
  add() {
    console.log(this.token)
    if (
      this.novoLivro.categoria == "" || this.novoLivro.titulo == "" || this.novoLivro.preco == 0 ||
      this.novoLivro.quantidadePaginas == 0 || this.novoLivro.imagem == ""
    ) {
      console.log("preencher todos os campos.")
    } else {

      this.livroSevice.cadastrarLivro(this.novoLivro).subscribe({
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
}

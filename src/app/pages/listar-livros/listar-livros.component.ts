import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livros } from 'src/app/Models/livros';
import { CardLivrosService } from 'src/app/services/card-livros.service';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {


  livros: Livros[] = []
  atualizarLivro : Livros[] = []

  constructor(private livroService: CardLivrosService, private livro: Livros, private route: Router) {

  }

  ngOnInit(): void {
    console.log(this.livroService.urlLogin)
    this.listarLivros()
  }

  listarLivroPorId(i: number, livro : Livros){
      return this.livroService.listarLivroPorId(this.livro, i).subscribe(
        (response : any) => {
          this.atualizarLivro = [response.body] // [] para dizer que é um array único
          this.livroService.AtualizarItem.push(livro)
          this.route.navigate(['/atualizar-livro'])
          console.log(this.livroService.AtualizarItem)
        }
      )
    }
  listarLivros(){
    return this.livroService.listarLivros(this.livro).subscribe(
      (response: any) => {
        console.log(response.body)
        this.livros = response.body
        console.log(this.livros)
        this.livros.forEach(item => {
          this.livro.titulo = item.titulo
          this.livro.preco = item.preco
          this.livro.categoria = item.categoria
          this.livro.quantidadePaginas = item.quantidadePaginas
          this.livro.id = item.id
          
        })

      }
    )
  }
  removerLivro( i : number) {
    console.log(i)
    return this.livroService.removerLivro(i);
  }
}

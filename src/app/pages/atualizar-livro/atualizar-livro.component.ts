import { Component, OnInit } from '@angular/core';
import { Livros } from 'src/app/Models/livros';
import { CardLivrosService } from 'src/app/services/card-livros.service';

@Component({
  selector: 'app-atualizar-livro',
  templateUrl: './atualizar-livro.component.html',
  styleUrls: ['./atualizar-livro.component.css']
})
export class AtualizarLivroComponent implements OnInit {
  livroAtualizar : Livros []= []
  constructor(private livroService : CardLivrosService) {
    console.log(this.livroService.AtualizarItem)
    this.livroAtualizar = this.livroService.AtualizarItem
   }

  ngOnInit(): void {

    console.log(this.livroAtualizar)

  }

}

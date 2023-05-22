import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrado-sucesso',
  templateUrl: './cadastrado-sucesso.component.html',
  styleUrls: ['./cadastrado-sucesso.component.css']
})
export class CadastradoSucessoComponent implements OnInit {
  @Input()
  mensagem :string = "Produto cadastrado com sucesso!"
  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  voltarAoPainel(){
    this.route.navigate(['/painel'])
  }
}

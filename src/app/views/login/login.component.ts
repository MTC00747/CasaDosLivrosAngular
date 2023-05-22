import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  //Classes e métodos
  userModel = new User()
  Mensagem = "";

  //Função para armazenar token JWT 

  setToken(token: string): void {
    localStorage.setItem('token', token)
  }

  receberDados() {
    // console.log(this.userModel);
    const Blaclist = ["SELECT", "OR", '"="', "--", ";", "1 = 1", "1=1", "DROP", "\"\"=\"\"", "'='"];
    let Ataque = 0
    //Percorrer o arrray e verificar se encontrou alguma palavra da blacklist
    Blaclist.forEach((Palavra) => {
      if (this.userModel.email?.toUpperCase().includes(Palavra)) {
        Ataque++
      }
    });

    if (this.userModel.email == "" || this.userModel.senha == "" || Ataque > 0) {//palavra proibida ou se esqueeu de preencher algum campo 
      this.Mensagem = "Preencher os campos corretamente";
    } else {
      //Disparando a funcionaldiade logar usuario 
      this.userService.logarUsuario(this.userModel).subscribe({
        next: (response: any) => {

          console.log("Deu certo!")
          console.log(response)
          localStorage.setItem('token', response.body.token)
          this.setToken(response.body.token)
          const tipo: string = response.body.tipo
          if (tipo === "1") {
            this.router.navigate(['/painel'])
          } else {
            this.router.navigate(['/'])
          }
          this.Mensagem = "Logado com sucesso";
        },
        error: (err: { error: string; }) => {
          console.log("Deu Erro!")
          console.log(err)
          this.Mensagem = "Email ou senhoa estão incorretos.";
        },
      })
    }

  }
}

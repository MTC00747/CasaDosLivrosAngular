import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  //Classes e métodos
  userModel = new User()
  Mensagem = "";
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

    if (this.userModel.email == "" || this.userModel.password == "" || Ataque > 0) {//palavra proibida ou se esqueeu de preencher algum campo 
      this.Mensagem = "Preencher os campos corretamente";
    } else {
      //Disparando a funcionaldiade logar usuario 
      this.userService.logarUsuario(this.userModel).subscribe({
        next: (response) => {
          console.log("Deu certo!")
          console.log(response)
          this.Mensagem = "Logado com sucesso";
        },
        error: (err) => {
          console.log("Deu Erro!")
          console.log(err)
          this.Mensagem = err.error;
        },


      })
    }

  }
}

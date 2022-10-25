import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private  userService : UserService) { }

  ngOnInit(): void {
  }
  //Classes e métodos
  userModel= new User() 
  Mensagem ="";
  receberDados() {
    console.log(this.userModel);
    //Disparando a funcionaldiade logar usuario 
    this.userService.logarUsuario(this.userModel).subscribe({
      next: (response) => {
        console.log("Deu certo!")
        console.log(response)
        this.Mensagem="Logado com sucesso";
      },
      error: (err) => {
        console.log("Deu Erro!")
        console.log(err)
        this.Mensagem= err.error;
      },
      
    
    })
    
  }

}

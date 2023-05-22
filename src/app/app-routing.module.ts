import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PainelAdmComponent } from './Views/painel-adm/painel-adm.component';
import { AdicionarLivroComponent } from './pages/adicionar-livro/adicionar-livro.component';
import { CadastradoSucessoComponent } from './pages/cadastrado-sucesso/cadastrado-sucesso.component';
import { ListarLivrosComponent } from './pages/listar-livros/listar-livros.component';
import { RemovidoSucessoComponent } from './pages/removido-sucesso/removido-sucesso.component';



const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"", component: HomeComponent},
  {path:"painel", component: PainelAdmComponent, canActivate : [AuthGuardService]},
  {path:"adicionar-livro", component: AdicionarLivroComponent, canActivate : [AuthGuardService] },
  {path:'sucesso', component: CadastradoSucessoComponent, canActivate : [AuthGuardService]},
  {path:'removido-sucesso', component: RemovidoSucessoComponent, canActivate : [AuthGuardService]},
  {path:'listar-livros', component: ListarLivrosComponent, canActivate : [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

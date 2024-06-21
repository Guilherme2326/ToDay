import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarTarefaComponent } from './components/tarefas/criar-tarefa/criar-tarefa.component';
import { ListarTarefaComponent } from './components/tarefas/listar-tarefa/listar-tarefa.component';
import { ExcluirTarefaComponent } from './components/tarefas/excluir-tarefa/excluir-tarefa.component';
import { EditarTarefaComponent } from './components/tarefas/editar-tarefa/editar-tarefa.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'cadastrar', component: CadastroComponent},
  { path: 'adicionarTarefa', component: CriarTarefaComponent },
  { path: 'listarTarefa', component: ListarTarefaComponent },
  { path: 'tarefa/excluirTarefa/:id', component: ExcluirTarefaComponent },
  { path: 'tarefa/editarTarefa/:id', component: EditarTarefaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

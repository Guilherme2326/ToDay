import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CriarTarefaComponent } from './components/tarefas/criar-tarefa/criar-tarefa.component';
import { AppComponent } from "./app.component";
import { EditarTarefaComponent } from "./components/tarefas/editar-tarefa/editar-tarefa.component";
import { ExcluirTarefaComponent } from "./components/tarefas/excluir-tarefa/excluir-tarefa.component";
import { ListarTarefaComponent } from "./components/tarefas/listar-tarefa/listar-tarefa.component";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TarefaComponent } from "./components/tarefas/tarefa/tarefa.component";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './components/pages/login/login.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';

@NgModule({
    declarations: [
        AppComponent,
        CriarTarefaComponent,
        EditarTarefaComponent,
        ExcluirTarefaComponent,
        ListarTarefaComponent,
        FooterComponent,
        HeaderComponent,
        TarefaComponent,
        LoginComponent,
        CadastroComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatCardModule,
        MatDatepickerModule,
        CommonModule,
        RouterLink,
        MatNativeDateModule,
        FormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }

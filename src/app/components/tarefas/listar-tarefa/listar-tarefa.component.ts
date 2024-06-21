import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../../models/tarefa/tarefa.model';
import { TarefaService } from '../../../services/tarefa/tarefa.service';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrl: './listar-tarefa.component.scss'
})
export class ListarTarefaComponent implements OnInit {
  tarefas?: Tarefa[];

  constructor(private service: TarefaService) { }

  ngOnInit(): void {
    this.service.listarPorUsuario().subscribe((tarefas) => {
      this.tarefas = tarefas
    })
  }
}

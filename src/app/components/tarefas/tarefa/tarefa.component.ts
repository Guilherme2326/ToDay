import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from '../../../models/tarefa/tarefa.model';
import { TarefaService } from '../../../services/tarefa/tarefa.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.scss',
  providers: [
    DatePipe
  ]
})
export class TarefaComponent implements OnInit {

  @Input() tarefa: Tarefa = {
    id: 0,
    tarefa: 'Trabalho final Programação Web',
    prazo: new Date(20,5,2024),
    urgencia: 'urgencia-alta'
  }

  constructor(
    private service: TarefaService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  excluirTarefa() {
    if(this.tarefa.id) {
      this.service.excluir(this.tarefa.id).subscribe(() => {
        this.router.navigate(['/listarTarefa'])
      })
    }
  }

  editarTarefa() {
    this.service.editar(this.tarefa).subscribe(() => {
    
    })
  }

  /*larguraAtividade(): string {
    if(this.tarefa.tarefa?.length >= 256) {
      return 'tarefa-g'
    }
    return 'tarefa-p'
  }*/

}

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../../models/tarefa/tarefa.model';
import { TarefaService } from '../../../services/tarefa/tarefa.service';

@Component({
  selector: 'app-excluir-tarefa',
  templateUrl: './excluir-tarefa.component.html',
  styleUrl: './excluir-tarefa.component.scss'
})
export class ExcluirTarefaComponent implements OnInit {

  tarefa: Tarefa = {
    id: 0,
    tarefa: '',
    prazo: new Date(),
    urgencia: ''
  }

  constructor(
    private service: TarefaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((tarefa) => {
      this.tarefa = tarefa
    })
  }


  excluirTarefa() {
    if(this.tarefa.id) {
      this.service.excluir(this.tarefa.id).subscribe(() => {
        this.router.navigate(['/listarTarefa'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarTarefa'])
  }
}

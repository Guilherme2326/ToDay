import { Component } from '@angular/core';
import { Tarefa } from '../../../models/tarefa/tarefa.model';
import { TarefaService } from '../../../services/tarefa/tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrl: './editar-tarefa.component.scss'
})
export class EditarTarefaComponent {
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

  editarTarefa() {
    this.service.editar(this.tarefa).subscribe(() => {
      this.router.navigate(['/listarTarefa'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarTarefa'])
  }

}

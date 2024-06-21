import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { Tarefa } from '../../../models/tarefa/tarefa.model';
import { TarefaService } from '../../../services/tarefa/tarefa.service';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrl: './criar-tarefa.component.scss',
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    DatePipe
  ],
})

export class CriarTarefaComponent implements OnInit {
  tarefa: Tarefa = {
    tarefa: '',
    prazo: new Date(),
    urgencia: ''
  };

  constructor(
    private service: TarefaService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
  }

  criarTarefa(): void {
    this.service.criar(this.tarefa).subscribe(() => {
      this.router.navigate(['/listarTarefa'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarTarefa'])
  }
}

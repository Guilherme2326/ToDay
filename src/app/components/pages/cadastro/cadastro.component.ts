import { Component, OnInit } from '@angular/core';
import { Login } from '../../../models/login/login.model';
import { LoginService } from '../../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {
  login: Login = {
    usuario: '',
    senha: ''
  };
  cadastroError: boolean = false;

  constructor (
    private service: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarLogin(): void {
    this.service.criar(this.login).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Erro ao criar cadastro:', error);
        this.cadastroError = true;
      }
    );
  }

  cancelar() {
    this.router.navigate(['/login'])
  }
}

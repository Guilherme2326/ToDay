import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../../../services/login/login.service';
import { Login } from '../../../models/login/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  login = {
    usuario: '',
    senha: ''
  };
  loginError: boolean = false;

  constructor(
    private service: LoginService, 
    private router: Router) {}

  ngOnInit(): void {
  }

  login_() {
    this.service.login(this.login.usuario, this.login.senha).subscribe(
      succes => {
        if (succes) {
          this.router.navigate(['/listarTarefa'])
        } else {
          this.loginError = true;
        }
      },
      error => {
        console.error('Erro ao fazer login:', error);
        this.loginError = true;
      }
    )
  }

  cadastrar() {
    this.router.navigate(['/cadastrar'])
  }
}

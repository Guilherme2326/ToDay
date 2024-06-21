import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Login } from '../../models/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API ='http://localhost:3000/login'
  constructor(private http: HttpClient) { }

  recuperarId() : number {
    const usuarioAtual = this.getCurrentUser();
    return usuarioAtual.usuarioId || null;
  }

  login(usuario: string, senha: string): Observable<boolean> {
    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache'
    });
    return this.http.get<any[]>(`${this.API}?usuario=${usuario}&senha=${senha}`, { headers })
      .pipe(
        map(Login => {
          if (Login.length === 1) {
            // Usuário encontrado, login bem-sucedido
            localStorage.setItem('currentUser', JSON.stringify(Login[0]));
            return true;
          } else {
            // Usuário não encontrado ou senha incorreta
            return false;
          }
        }),
        catchError(error => {
          console.error('Erro ao tentar fazer login:', error);
          return of(false);
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  criar(login: Login): Observable<Login> {
    return this.http.post<Login>(this.API, login)
  }
}

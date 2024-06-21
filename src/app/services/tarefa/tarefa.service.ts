import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../../models/tarefa/tarefa.model';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private readonly API = 'http://localhost:3000/tarefas'
  constructor(
    private http: HttpClient,
    private service: LoginService
  ) { }

  listar(): Observable<Tarefa[]> {
    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache'
    });

    return this.http.get<Tarefa[]>(this.API, { headers })
  }

  listarPorUsuario(): Observable<Tarefa[]> {
    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache'
    });
    const usuarioId = this.service.recuperarId();
    const params = new HttpParams().set('usuarioId', usuarioId.toString());
    return this.http.get<Tarefa[]>(this.API, { params, headers });
  }


  criar(tarefa: Tarefa): Observable<Tarefa> {
    const usuarioId = this.service.recuperarId();
    tarefa.usuarioId = usuarioId;
    return this.http.post<Tarefa>(this.API, tarefa)
  }

  editar(tarefa: Tarefa): Observable<Tarefa> {
    const url = `${this.API}/${tarefa.id}`
    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache'
    });
    return this.http.put<Tarefa>(url, tarefa, { headers } )
  }

  excluir(id: number): Observable<Tarefa> {
    const url = `${this.API}/${id}`
    return this.http.delete<Tarefa>(url)
  }

  buscarPorId(id: number): Observable<Tarefa> {
    const url = `${this.API}/${id}`
    return this.http.get<Tarefa>(url)
  }
}

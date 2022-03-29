import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ticket } from '../model/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  apiUrl: string = environment.apiUrl
  entityName: string = 'tickets'

  constructor(
    private http: HttpClient
  ) { }

  get(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiUrl}/${this.entityName}/${id}`)
  }

  getAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}/${this.entityName}`)
  }

  create(ticket:Ticket): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${this.entityName}`, ticket)
  }

  update(ticket:Ticket): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${this.entityName}/${ticket.id}`, ticket)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${this.entityName}/${id}`)
  }

}

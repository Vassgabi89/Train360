import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Train } from '../model/train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  apiUrl: string = environment.apiUrl
  entityName: string = 'trains'

  constructor(
    private http: HttpClient
  ) { }

  get(id: number): Observable<Train> {
    return this.http.get<Train>(`${this.apiUrl}/${this.entityName}/${id}`)
  }

  getAll(): Observable<Train[]> {
    return this.http.get<Train[]>(`${this.apiUrl}/${this.entityName}`)
  }

  create(train:Train): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${this.entityName}`, train)
  }

  update(train:Train): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${this.entityName}/${train.id}`, train)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${this.entityName}/${id}`)
  }
}

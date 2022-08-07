import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opportunity } from '../model/opportunity.model';
@Injectable({
  providedIn: 'root'
})

export class OpportunityService {

  private readonly url = "http://localhost:3000/opportunities";

  httOptions = {
    headers: new HttpHeaders({
      "content-type": "application/json"
    })
  };

  constructor(private http: HttpClient) { }

  getAll(id: string): Observable<Opportunity[]> {
    const _url = `${this.url}/${id}`
    return this.http.get<Opportunity[]>(_url);
  }

  update(id: string, opportunities: Opportunity[]): Observable<Opportunity[]> {
    const _url = `${this.url}/${id}`
    return this.http.put<Opportunity[]>(_url, opportunities);
  }
}

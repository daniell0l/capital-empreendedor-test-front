import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import { ResponseUsers } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:3000/users"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(this.url)
  }
}
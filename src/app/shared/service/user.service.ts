import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/* import { ResponsePageable } from '../model/responsePageable.model'; */
import { ResponseCreate, ResponseUpdate, ResponseUser, ResponseUsers } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:3000/users/all";
  private url2 = "http://localhost:3000/users";




  httOptions = {
    headers: new HttpHeaders({
      "content-type": "application/json"
    })
  };
  constructor(private http: HttpClient) { }
  getUsers(): Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(this.url);
  }
  createUser(request: ResponseCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url2, request);
  }
  getUser(id: string): Observable<ResponseUser> {
    const _url = `${this.url2}/${id}`
    return this.http.get<ResponseUser>(_url)
  }
  updateUser(id: string, request: ResponseUpdate): Observable<ResponseUpdate> {
    const _url = `${this.url2}/${id}`
    return this.http.put<ResponseUpdate>(_url, request);
  }
  deleteUser(id: string,): Observable<any> {
    const _url = `${this.url2}/${id}`
    return this.http.delete<any>(_url);
  }
}

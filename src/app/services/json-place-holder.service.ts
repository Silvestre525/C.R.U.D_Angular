import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  //Atributo o propiedades
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  //Metodo Constructor
  constructor(private http: HttpClient) { }

  //Metodo que hace el get del endpoind del backend
  public getAllJsonPlaceholder(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

}
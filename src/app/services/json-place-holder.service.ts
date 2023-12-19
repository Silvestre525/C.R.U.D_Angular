import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  // Obtener posts paginados y filtrados por título
  getPosts(page: number, title?: string): Observable<any[]> {
    let params = new HttpParams()
      .set('_page', String(page))
      .set('_limit', '10');

    if (title) {
      params = params.set('title', title);
    }

    return this.http.get<any[]>(this.apiUrl, { params });
  }

  // Crear un nuevo post
  createPost(postData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, postData);
  }
}

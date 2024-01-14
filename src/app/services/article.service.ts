import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private readonly url = 'http://localhost:3000/article';

  private readonly httpClient = inject(HttpClient);

  /**
  getListByAuthor(author: string): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${this.url}?author=${author}`);
  }
  */

  getList(author?: string): Observable<Article[]> {
    const url = author ? `${this.url}?author=${author}` : this.url;

    return this.httpClient.get<Article[]>(url);
  }
}

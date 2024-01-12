import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  private readonly url = 'http://localhost:3000/tags';

  private readonly httpClient = inject(HttpClient);

  getList(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.url);
  }
}

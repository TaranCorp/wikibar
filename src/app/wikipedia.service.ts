import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface SearchBarResult {
  pageid: number;
  title: string;
  wordcount: number;
  snippet: string;
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private httpClient: HttpClient) { }

  search(term: string) {
     return this.httpClient.get(`https://en.wikipedia.org/w/api.php`, {
          params: {
            action: 'query',
            list: 'search',
            srsearch: term,
            utf8: '1',
            format: 'json',
            origin: '*'
          }
    }).pipe(
      map((value: any) => value.query?.search)
    ) as Observable<Array<SearchBarResult>>;
  }
}



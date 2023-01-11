import { Component } from '@angular/core';
import { WikipediaService, SearchBarResult } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wikibar';
  result: Array<SearchBarResult> = [];

  constructor(private wikipediaService: WikipediaService) {}

  onSubmittedSearch(searchTerm: string) {
    this.getWikiData(searchTerm);
  }

  getWikiData(term: string): void {
    this.wikipediaService.search(term).subscribe(pages => {
      this.result = pages;
    })
  }
}

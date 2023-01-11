import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { SearchBarResult } from '../wikipedia.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() pages: Array<SearchBarResult> = [];

  prepareWikiLink(pageId: number): string {
    return `https://en.wikipedia.org?curid=${pageId}`;
  }
}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>();
  userSearchInput: string = '';

  onUserSearchInputChange(event: Event): void {
    this.userSearchInput = (event.target as HTMLInputElement).value;
  }

  onFormSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.emit(this.userSearchInput);
  }
}

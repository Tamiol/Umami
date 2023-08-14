import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() searchRecipe = new EventEmitter<string>();
  recipeName = '';

  searchRecipeName() {
    this.searchRecipe.emit(this.recipeName);
  }
}

import { Component, signal } from '@angular/core';
import { GifService } from '../services/gif.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {

  searchQuery = signal<string>('')
  constructor(private gifService: GifService) {
    this.searchQuery = this.gifService.currentSearch;
  }

  search() {
    if (!this.searchQuery().trim()) return;
    this.gifService.searchGifs(this.searchQuery());
    this.gifService.setCurrentSearch(this.searchQuery());
    this.searchQuery.set('');
  }


}

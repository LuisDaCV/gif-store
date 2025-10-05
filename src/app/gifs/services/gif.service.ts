import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private _searches =signal<string[]> ([]);
  private _currentSearch = signal<string>('');
  
  
  get currentSearch(){
    return this._currentSearch;
  }
  get searches()  {
    return this._searches;
  }
  searchGifs(query: string) {
    if(!query.trim()) return;
    if(!this._searches().includes(query)){
      this._searches.set([...this._searches(), query]);
    }
  }
   setCurrentSearch(value: string) {
    this._currentSearch.set(value);
    // this.searchGifs(value);
  }
}



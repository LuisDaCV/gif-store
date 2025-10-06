import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifService {


  private apiKey: string = 'WoZCO4AsI8NkZGwql0VWOYNbCXJqRwMD';
  private apiUrl = 'https://api.giphy.com/v1/gifs/search';

  private _searches = signal<string[]>([]);
  private _currentSearch = signal<string>('');

  localHistory = "History"
  localSearches = "Searches"

  public results: Gif[] = [];

  constructor(private http: HttpClient) {
    this._searches.set(this.loadHistory());
    this.results = this.loadLastSearch();
  }

  get currentSearch() {
    return this._currentSearch;
  }
  get searches() {
    return this._searches;
  }
  searchGifs(query: string) {
    query = query.toLowerCase();
    if (!query.trim()) return;
    let currentHistory = this._searches();

    currentHistory = currentHistory.filter(item => item !== query);

    this._searches.set([query, ...currentHistory].slice(0, 10));
    // localStorage.setItem(this.localHistory, JSON.stringify(this._searches()));
    this.saveHistory();

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', 10);

    this.http.get<SearchGifsResponse>(this.apiUrl, { params })
      .subscribe(res => {
        this.results = res.data;
        this.saveLastSearch();
      });

  }

  setCurrentSearch(value: string) {
    this.searchGifs(value);
    this._currentSearch.set(value);
  }

  saveHistory() {
    localStorage.setItem(this.localHistory, JSON.stringify(this._searches()));
  }
  loadHistory(): string[] {
    const data = localStorage.getItem(this.localHistory);
    return data ? JSON.parse(data) : [];
  }

  saveLastSearch() {
    localStorage.setItem(this.localSearches, JSON.stringify(this.results));
  }

  loadLastSearch(): Gif[] {
    const data = localStorage.getItem(this.localSearches);
    return data ? JSON.parse(data) : []
  }
}



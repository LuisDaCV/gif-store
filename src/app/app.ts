import { Component, computed, Signal, signal } from '@angular/core';
import { Sidebar } from "./shared/sidebar/sidebar";
import { GifsPage } from "./gifs/gifs-page/gifs-page";
import { GifService } from './gifs/services/gif.service';
@Component({
  selector: 'app-root',
  imports: [Sidebar, GifsPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  searches: Signal<string[]>;
  
  constructor(private gifService: GifService) {
    this.searches = gifService.searches;
  };
  
  search(value:string) {
    this.gifService.setCurrentSearch(value)
  }



}

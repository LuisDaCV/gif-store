import { Component } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-results',
  imports: [],
  templateUrl: './results.html',
  styleUrl: './results.css'
})
export class Results {

  get results(){
    return this.gifService.results
  }
  
  constructor(private gifService: GifService){}

}

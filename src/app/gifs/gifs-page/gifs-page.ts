import { Component } from '@angular/core';
import { Search } from "../search/search";
import { Results } from "../results/results";

@Component({
  selector: 'app-gifs-page',
  imports: [Search, Results],
  templateUrl: './gifs-page.html',
  styleUrl: './gifs-page.css'
})
export class GifsPage {

}

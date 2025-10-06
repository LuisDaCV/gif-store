import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
import { GifService } from '../../gifs/services/gif.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [CommonModule],
  styleUrl: './sidebar.css'
})
export class Sidebar {


  @Input() searches!:Signal<string[]>;
  // @Input() searches:string[] = [];
  @Output() searchValue = new EventEmitter<string>();

  search(value:string){
    this.searchValue.emit(value);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { SearchText } from './search-text.model'

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.css']
})
export class SearchTextComponent implements OnInit {
  @Input() searchText: SearchText;

  constructor() { }

  ngOnInit() {
    
  }

  

}

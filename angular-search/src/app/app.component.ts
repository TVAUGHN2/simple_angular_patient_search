import { Component } from '@angular/core';
import { ClassList } from './class-list/class-list.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DEPAUL EMAIL SEARCH';
  names = [];

  classList: ClassList;
    constructor() {
      this.classList = new ClassList();
      this.names = Object.keys(this.classList.list); //initialize list of names
    }

    search(name: HTMLInputElement): boolean {
      this.classList.search(name.value);
      name.value = "";
      return false;
    }
  
}

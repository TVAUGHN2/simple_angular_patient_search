import { Component} from '@angular/core';
import { PatientList } from './patient-list/patient-list.model'
import { SearchText } from './search-text/search-text.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'DEPAUL PATIENT SEARCH';
  patients = [];

  patientList: PatientList;
  searchText: SearchText;

  constructor() {
    this.patientList = new PatientList();
    this.patients = Object.keys(this.patientList.list); //initialize list of names
    this.searchText = new SearchText();
  }


    search(name: HTMLInputElement): boolean {
      this.patientList.search(name.value.toUpperCase());
      name.value = "";
      return false;
    }

    updateText(name: HTMLInputElement){
      this.searchText.updateText(name.value);
    }

}


import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { PatientList } from './patient-list.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() patientList: PatientList;

  constructor() { 
  }


  ngOnInit() {
  }

}

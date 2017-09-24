import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ClassList } from './class-list.model';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() classList: ClassList;

  constructor() { 
  }


  ngOnInit() {
  }

}

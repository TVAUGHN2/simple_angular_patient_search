import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { SearchTextComponent } from './search-text/search-text.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    SearchTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }

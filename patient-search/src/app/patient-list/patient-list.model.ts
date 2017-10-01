import { Patient } from '../patient.model'

export class PatientList{
    list: Patient[];
    result: Patient[];
    
    constructor(){
        this.list = [
            new Patient('Zach', 'Braff', 'zb@scrubs.doc','./assets/images/jd.jpg','Dorian'),
            new Patient('Sarah', 'Chalke', 'sc@scrubs.doc','./assets/images/reid.jpeg','Reid'),
            new Patient('Donald', 'Faison', 'df@scrubs.doc','./assets/images/turk.png','Turk'),
            new Patient('Ken', 'Jenkins', 'kj@scrubs.doc','./assets/images/kelso.jpeg','Kelso'),
            new Patient('John C.', 'McGinley', 'jcg@scrubs.doc','./assets/images/cox.jpg','Cox'),
            new Patient('Eliza', 'Coupe', 'ec@scrubs.doc','./assets/images/mahoney.jpeg','Mahoney'),
            new Patient('Doogie', 'Howser', 'npg@scrubs','./assets/images/turk.png','Turk'),
            new Patient('Gregory', 'House', 'hl@scrubs.doc','./assets/images/cox.jpg','Dorian'),
            new Patient('Eric', 'Foremane', 'oe@scrubs.doc','./assets/images/turk.png','Dorian'),
            new Patient('Allison', 'Cameron', 'rsl@scrubs.doc','./assets/images/jd.jpg','Reid'),
        ]
        this.result = [];
    }

    search(searchStr: string): void {
        this.result = [];
        var searchArray = searchStr.split(" "); //splitting input by space

        if (searchArray[0].toUpperCase() == "DOCTOR"){
            //return search results for doctor names
            this.list.forEach( (patient)=> {
                if(patient.doctorName.toUpperCase() == searchArray[1].toUpperCase()) {
                    this.result.push(patient);
                } 
            });
        }
        else if(searchArray[0].toUpperCase() == "NAME"){
            //return search results for first name
            this.list.forEach( (patient)=> {
                if(patient.firstName.toUpperCase() == searchArray[1].toString()){
                    this.result.push(patient);
                }
                else if(patient.firstName.toUpperCase().substring(0,1) == searchArray[1]) {
                    this.result.push(patient);
                } 
            });
        }
          
        
        if(this.result.length == 0){
            this.result = [new Patient("No Results.","","","","")];
        }
    }
}
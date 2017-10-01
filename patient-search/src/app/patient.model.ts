/**
 * Provides a `Patient` object
 */

 export class Patient {
     constructor(
        public firstName: string, 
        public lastName: string, 
        public emailAddress: string, 
        public profileImage: string,
        public doctorName: string
    ){}
 }
interface Teacher{
    firstName : string;
    lastName : string;
    fullTimeEmployee : boolean ;
    location : string;
    yearsOfExperience ? : number

    [key : string] : any;
}
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
console.log(teacher3);

interface Directors extends Teacher{
    numberOfReports:number
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}
  
const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
    const initial = firstName.charAt(0).toUpperCase();
    return `${initial}. ${lastName}`;
};
console.log(printTeacher("John", "Doe"));



interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
}
  
interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}
  
class StudentClass implements StudentClass {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
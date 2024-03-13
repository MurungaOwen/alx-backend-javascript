interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Creating two students
  const student1: Student = {
    firstName: "owen",
    lastName: "hood",
    age: 25,
    location: "Nairobi"
  };
  
  const student2: Student = {
    firstName: "Maya",
    lastName: "hood",
    age: 22,
    location: "Maldives"
  };

  const studentsList: Student[] = [student1, student2];
  console.table(studentsList,["firstName","location"]);
/// <reference path="./Cpp.ts" />
/// <reference path="./Java.ts" />
/// <reference path="./react.ts" />


const cTeacher: Subjects.Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
};

// For Cpp subject
console.log("For C++ subject:");
console.log("C++");
Subjects.cpp.setTeacher(cTeacher);
console.log(Subjects.cpp.getRequirements());
console.log(Subjects.cpp.getAvailableTeacher());

// For Java subject
console.log("For Java subject:");
console.log("Java");
// Set teacher and call methods for Java subject

// For React subject
console.log("For React subject:");
console.log("React");
// Set teacher and call methods for React subject
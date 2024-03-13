// Creating two students
var student1 = {
    firstName: "owen",
    lastName: "hood",
    age: 25,
    location: "Nairobi"
};
var student2 = {
    firstName: "Maya",
    lastName: "hood",
    age: 22,
    location: "Maldives"
};
var studentsList = [student1, student2];
console.table(studentsList, ["firstName", "location"]);

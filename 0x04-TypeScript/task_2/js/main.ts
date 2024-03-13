interface DirectorInterface{
    workFromHome() : string;
    getCoffeeBreak() : string;
    workDirectorTasks() : string;
}

interface TeacherInterface{
    workFromHome() : string;
    getCoffeeBreak() : string;
    workTeacherTasks() : string;
}

class Director implements DirectorInterface{
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface{
    workFromHome(): string {
        return "Working from home";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
}

function createEmployee(salary : number | string) : Director | Teacher {
    if(typeof salary === "number" && (salary < 500) ) {
        return new Teacher();
    }
    return new Director()
}

console.log(createEmployee(200));


function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}
console.log(executeWork(createEmployee(200))); //return getting to director tasks



//string lateral types task numbered 7
type Subjects = "Math" | "History";

function teachClass(todayClass : any) : string{
    if(todayClass === "Math") {
        return `Teaching ${todayClass}`;
    }
    return `Teaching ${todayClass}`;
}
console.log(teachClass('Math'));
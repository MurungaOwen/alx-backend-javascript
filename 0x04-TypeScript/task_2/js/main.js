var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Working from home";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === "number" && (salary < 500)) {
        return new Teacher();
    }
    return new Director();
}
console.log(createEmployee(200));
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}
executeWork(createEmployee(200));

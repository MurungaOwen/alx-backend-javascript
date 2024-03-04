export default function createEmployeesObject(departmentName, employees) {
    const employeesData = {};
    employeesData[departmentName] = employees;
    return employeesData;
}
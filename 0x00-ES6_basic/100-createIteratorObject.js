export default function createIteratorObject(report) {
    const departments = Object.values(report.allEmployees);
    let deptIndex = 0;
    let empIndex = 0;
  
    const iterator = {
      next() {
        if (deptIndex >= departments.length) {
          return { done: true };
        }
  
        const currentDepartment = departments[deptIndex];
        if (empIndex >= currentDepartment.length) {
            deptIndex++;
            empIndex = 0;
          return this.next();
        }
  
        const employee = currentDepartment[empIndex];
        empIndex++;
        return { value: employee, done: false };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  
    return iterator;
  }
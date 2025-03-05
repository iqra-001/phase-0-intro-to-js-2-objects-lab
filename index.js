// Write your solution in this file!
// Define an example employee object (this would usually be defined elsewhere or passed as an argument)
let employee = {
    name: "John Doe",
    role: "Engineer",
    department: "Development"
  };
  
  // 1. Non-destructively update employee with key-value pair
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Return a new object by copying the existing employee and adding/updating the key-value pair
    return {
      ...employee,
      [key]: value
    };
  }
  
  // 2. Destructively update employee with key-value pair
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Modify the original employee object directly
    employee[key] = value;
    return employee;
  }
  
  // 3. Non-destructively delete a key from the employee object
  function deleteFromEmployeeByKey(employee, key) {
    // Create a copy of the employee object and delete the key from the copy
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 4. Destructively delete a key from the original employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the key directly from the original employee object
    delete employee[key];
    return employee;
  }
  
let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
  };
  
  let newEmployee = (employee); // Shallow copy
  newEmployee.ename = "Beck";
  
  console.log("Employee:", employee);
  console.log("New Employee:", newEmployee);
  
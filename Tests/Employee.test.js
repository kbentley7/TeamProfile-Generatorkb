const Employee = require("../lib/Employee");

test("Ability to set name using constructor function", () => {
    const name = "FakeBruce Lee";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

test("Ability to set the user ID using constructor function", () => {
    const id = "1";
    const employee = new Employee("FakeBruce Lee", id, "fakebruce.lee@gmail.com");
    expect(employee.id).toBe(id);
  });

test("Running getEmail() should return the supplied email", () => {
    const email = "Fakebruce.lee@gmail.com";
    const employee = new Employee("FakeBruce Lee", 1, email);
    expect(employee.getEmail()).toBe(email);
  });

test("Running getRole() should return 'Employee'", () => {
    const role = "Employee";
    const employee = new Employee("FakeBruce Lee", 1, "fakebruce.lee@gmail.com");
    expect(employee.getRole()).toBe(role);
  });
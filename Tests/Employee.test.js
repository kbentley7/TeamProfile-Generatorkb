const Employee = require("../lib/Employee");

test("Using a constructor function to set namme", () => {
    const name = "FakeBruce Lee";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

test("Using a constructor function to set user ID ", () => {
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
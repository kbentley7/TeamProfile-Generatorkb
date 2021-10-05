const Manager = require("../lib/Manager");

test("Using a constructor function to set office number", () => {
    const officeNumber = "8466";
    const employee = new Manager("Kenneth", 1, "kenmo8466@gmailcom", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test("getRole() should return Manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("Mallory", 1, "kenmo8466@gmailcom", "kennethbentley");
    expect(employee.getRole()).toBe(role);
  });
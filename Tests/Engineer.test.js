const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
    const github = "kbentley7";
    const employee = new Engineer("Kenneth", 1, "kenmo8466@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Kenneth", 1, "kenmo8466@gmail.com", "kennethbentey");
    expect(employee.getRole()).toBe(role);
  });
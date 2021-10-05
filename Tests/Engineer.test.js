const Engineer = require("../lib/Engineer");

test("Using a constructor function to set GitHub user name", () => {
    const github = "kbentley7";
    const employee = new Engineer("Kenneth", 1, "kenmo8466@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() A role of Engineer should be retruned", () => {
    const role = "Engineer";
    const employee = new Engineer("Kenneth", 1, "kenmo8466@gmail.com", "kennethbentey");
    expect(employee.getRole()).toBe(role);
  });
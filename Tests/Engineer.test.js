const Engineer = require("../lib/Engineer");

test("Using a constructor function to set GitHub user name", () => {
    const github = "kbentley7";
    const employee = new Engineer("Kenneth", 1, "kenmo8466@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() A role of Engineer should be returned", () => {
    const role = "Engineer";
    const employee = new Engineer("Kenneth", 1, "kenmo8466@gmail.com", "kennethbentley");
    expect(employee.getRole()).toBe(role);
  });
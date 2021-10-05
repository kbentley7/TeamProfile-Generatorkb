const Intern = require("../lib/Intern");

test("Using a constructor function to set school ", () => {
    const school = "Shoalin School of Martial Arts";
    const employee = new Intern("Kenneth", 1, "kenmo8466@gmail.com", school);
    expect(employee.school).toBe(school);
  });

  test("getRole()  A role of Intern should be retruned", () => {
    const role = "Intern";
    const employee = new Intern("Kenneth", 1, "kenmo8466@gmail.com", "kennethbentley");
    expect(employee.getRole()).toBe(role);
  });
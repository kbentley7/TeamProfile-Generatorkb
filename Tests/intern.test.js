const Intern = require("../lib/Intern");

test("Use constructor function to set GitHub username ", () => {
    const school = "Shoalin School of Martial Arts";
    const employee = new Intern("Kenneth", 1, "kenmo8466@gmail.com", school);
    expect(employee.school).toBe(school);
  });

  test("getRole() should return Intern as a role", () => {
    const role = "Intern";
    const employee = new Intern("Kenneth", 1, "kenmo8466@gmail.com", "kennethbentley");
    expect(employee.getRole()).toBe(role);
  });
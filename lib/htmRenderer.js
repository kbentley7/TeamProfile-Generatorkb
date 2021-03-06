const path = require("path");
const fs = require("fs");
const Employee = require("./Employee");
const templatesDir = path.resolve(_dirname, "../templates");
// filters through the employees by roles
const render = Employee => {
    const html = [];
    //filters managers
html.push(employess
    .filter(employee => employee.getRole() === "Manager")
    .map(manager == renderManager (manager))
);
//filters engineers
html.push(employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  // filters interns
  html.push(employees
    .filter(employee => employee.getRole() === "Intern")
    .map(engineer => renderEngineer(intern))
  );

  return renderMain(html.join(""))
}

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"),"utf8");
    template = replacePlaceholders (template, "name", manager.getName());
    template = replacePlaceholders (template, "role", manager.getRole());
    template = replacePlaceholders (template, "email", manager.getEmail());
    template = replacePlaceholders (template, "id", manager.getId());
    template = replacePlaceholders (template, "officeNumber", engineer.getOfficeNumber());
    return template;
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"),"utf8");
    template = replacePlaceholders (template, "name", engineer.getName());
    template = replacePlaceholders (template, "role", engineer.getRole());
    template = replacePlaceholders (template, "email", engineer.getEmail());
    template = replacePlaceholders (template, "id", engineer.getId());
    template = replacePlaceholders (template, "github", engineer.getgithub());
    return template;
};

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"),"utf8");
    template = replacePlaceholders (template, "name", intern.getName());
    template = replacePlaceholders (template, "role", intern.getRole());
    template = replacePlaceholders (template, "email", intern.getEmail());
    template = replacePlaceholders (template, "id", intern.getId());
    template = replacePlaceholders (template, "school", intern.getschool());
    return template;
};

const renderMain = html => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    return replacePlaceholders (template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + "}}", "gm");
    return template.replace( patern, value);
};

module.exports = render;



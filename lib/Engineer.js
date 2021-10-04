const Employee = require("./Employee")
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.githb = github;
    }
    getRole() {
        return 'Engineer';
    }
    getGitub() {
        return this.githb;
    }
}

module.exports = Engineer;
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, github){
    super(name,position, id,email);
    this.github = github;

}

displayinfo();

}

module.exports = Engineer
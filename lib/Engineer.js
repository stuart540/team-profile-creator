// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// * `github`&mdash;GitHub username
// * `getGithub()`

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super (name, id, email);
    
    this.github = github;

  };  

  getGithub() {
    console.log(`What is your Engineer's GitHub username?`)  
  }

  getRole() {
    return Engineer
  }
};

module.exports = Engineer;
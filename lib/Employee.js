// TODO: Write code to define and export the Employee class

// * `name`
// * `id`
// * `email`
// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`    

class Employee {
  constructor(name, id, email,) {
    this.name = name;
    this.id = id;
    this.email = email;
  };
  getName() {
    console.log(`what is the ${this.Employee} name?`)
  }

  getId() {
    console.log(`what is the ${this.Employee} id?`)
  }

  getEmail() {
    console.log(`what is the ${this.Employee} email?`)
  }
};

module.exports = Employee;

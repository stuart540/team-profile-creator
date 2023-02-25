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
    console.log(`what is the ${this.Employee}'s name?`)
  }

  getId() {
    console.log(`what is the ${this.Employee}'s id?`)
  }

  getEmail() {
    console.log(`what is the ${this.Employee}'s email?`)
  }
  getRole() {
    return Employee
  }
};

module.exports = Employee;

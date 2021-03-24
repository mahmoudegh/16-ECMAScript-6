/* 
    OOP => classes part 1
    Old and new class syntax
 */

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    console.log(`Hello My Name Is ${this.name} My Age Is ${this.age}`);
  }
  getDays() {
    console.log(`Your age in days is ${this.age * 365}`);
  }
}

const firstUser = new User("Mahmoud", 35);

firstUser.getInfo();
firstUser.getDays();

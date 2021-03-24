/* 
    OOP => classes part 1
    Old and new class syntax
 */

import User from "./app.js";

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
}

const firstUser = new Admin("Mahmoud", "mahmoudegh@yahoo.com");
firstUser.getInfo();

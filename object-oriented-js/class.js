/* create class a constructor function inside the class*/
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in.`);
    return this
  }
  logout() {
    console.log(`${this.username} just logged out.`);
    return this
  }
  incScore(){
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`)
    return this
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.username !== user.username;
    });
  }
}
const userOne = new User("evelyn", "evelyn@email.com");
const userTwo = new User("frank", "frank@email.com");
const userThree = new Admin("gougou", "gougou@email.com");

let users = [userOne, userTwo, userThree];

// console.log(userOne, userTwo, userThree);
// userOne.logout();
userOne.login().incScore().logout()

userThree.deleteUser(userOne);
console.log(users);

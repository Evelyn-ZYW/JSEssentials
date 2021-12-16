/* create class a constructor function inside the class*/
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  login() {
    console.log(`${this.username} just logged in.`);
  }
  logout() {
    console.log(`${this.username} just logged out.`);
  }
}
const userOne = new User("evelyn", "evelyn@email.com");

/* create the User function */
// function User(username, email) {
//   this.username = username;
//   this.email = email;
// }
// const userOne = new User("evelyn", "evelyn@email.com");

console.log(userOne);
userOne.logout();

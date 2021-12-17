/* store methods in the prototype - this is the way before class keyword comes in */
function User(username, email) {
  this.username = username;
  this.email = email;
  this.score = 0;
  //   this.login = function () {
  //     console.log(`${this.username} just logged in.`);
  //     return this;
  //   };
  //   this.logout = function () {
  //     console.log(`${this.username} just logged out.`);
  //     return this;
  //   };
  //   this.incScore = function () {
  //     this.score += 1;
  //     console.log(`${this.username} has a score of ${this.score}`);
  //     return this;
  //   };
}

User.prototype.login = function () {
  console.log(`${this.username} just logged in.`);
  return this;
};
User.prototype.logout = function () {
  console.log(`${this.username} just logged out.`);
  return this;
};

User.prototype.incScore = function () {
  this.score += 1;
  console.log(`${this.username} has a score of ${this.score}`);
  return this;
};

const userOne = new User("evelyn", "evelyn@email.com");

userOne.incScore();

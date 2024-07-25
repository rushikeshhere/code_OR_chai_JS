function User(username, email, pass) {
    this.username = username;
    this.email = email;
    this.pass = pass;
}
User.prototype.encryptPass = function () {
    return `${this.pass}abx`;
}
User.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`;
}

const chai = new User("rushikesh Here", "rushikeshhere@gmail.com", 1245);
console.log(chai);
console.log(chai.encryptPass());
console.log(chai.changeUserName());
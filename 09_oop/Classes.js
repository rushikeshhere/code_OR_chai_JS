class User {
    constructor(username, email, pass) {
        this.username = username;
        this.email = email;
        this.pass = pass;
    }
    encryptPass(pass) {
        return `${this.pass}abc`
    }
    changeUserName(username) {
        return `${this.username.toUpperCase()}`;
    }
}
const chai = new User("rushikesh", "rushikeshhere@gmail.com", 121)
console.log(chai);
console.log(chai.encryptPass());
console.log(chai.changeUserName());


// behind the scene


function User1(username, email, pass) {
    this.username = username;
    this.email = email;
    this.pass = pass;
}
User1.prototype.encryptPass = function () {
    return `${this.pass}abx`;
}
User1.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`;
}

const tea = new User1("rushikesh Here", "rushikeshhere@gmail.com", 1245);
console.log(tea);
console.log(tea.encryptPass());
console.log(tea.changeUserName());
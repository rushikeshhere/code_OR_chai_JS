function SetUserName(username) {
    this.username = username;
    console.log("Called");
}
function createUser(username, email, password) {
    SetUserName.call(this, username);
    this.email = email;
    this.password = password;
}
const chai = new createUser("chai", "chai@fb.com", 123456);
console.log(chai);

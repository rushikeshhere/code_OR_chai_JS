// object literals

const jsUsers = {
    name: "Rushikesh",
    age: 24,
    email: "rushikeshhere@gmail.com",
    adress: "England",
    isLoggedIn: false,
}
// console.log(jsUsers.name);
// console.log(jsUsers.age);
// console.log(jsUsers["email"]);
// console.log(jsUsers);

jsUsers.gretting = function () {
    console.log("Hi JS User!");
}

jsUsers.grettingTwo = function () {
    console.log(`Hi JS User, ${this.name}`);
}
console.log(jsUsers.gretting());
console.log(jsUsers.grettingTwo());
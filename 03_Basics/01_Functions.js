
// functions

function sumOfTwoNumbers() {
    return 2 + 2;
}
// console.log(sumOfTwoNumbers());

function printName(username) {
    console.log(`The name of User is ${username}`);
}
// printName("rushikesh")


user = {
    username: "Rushikesh",
    age: 24
}
function showUserDetails(anyObject) {
    console.log(`The name of user is ${anyObject.username} and his age is ${anyObject.age}`);
}
showUserDetails(user);
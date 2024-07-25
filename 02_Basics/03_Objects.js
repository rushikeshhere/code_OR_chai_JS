// singleton

const facebookUser = new Object(); // this is the singleton object'

//const facebookUser = {}; both are acceptable in js

facebookUser.id = 12345;
facebookUser.name = "Ravan";
facebookUser.isLoggedIn = true;

// console.log(facebookUser);


const instaUser = {
    email: "rushikesh@gmail.com",
    fullName: {
        userfullName: {
            firstName: "ganesh",
            lastName: "Shankar"
        }
    }
}
console.log(instaUser.fullName.userfullName.lastName);




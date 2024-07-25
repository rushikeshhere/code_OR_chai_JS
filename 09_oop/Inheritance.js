class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`${this.username} is loggedIn`);
    }
}
class Teacher extends User {
    constructor(username, email, pass) {
        super(username);
        this.email = email;
        this.pass = pass;
    }
    taughtSubjectByTeacher() {
        console.log(`Physics subject Taught by ${this.username}`);
    }
}
const chai = new Teacher("Rushieksh", "rushikeshhere@gmail.com", 1245645);
console.log(chai);
chai.taughtSubjectByTeacher();
// child class can inherite parent class methods
chai.logMe();

// creating Object for Parent class which will not able to call the child class methods

const tea = new User("Rakesh");
// not possible , due to method Overriding
// tea.taughtSubjectByTeacher();
tea.logMe();
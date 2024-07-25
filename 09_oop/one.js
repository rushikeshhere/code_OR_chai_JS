function Person(username, email, isloggedIn) {
    this.username = username,
        this.email = email,
        this.isloggedIn = isloggedIn
}
const personOne = new Person("Rushikesh", "rushikeshhere@gmail.com", true);
console.log(personOne);
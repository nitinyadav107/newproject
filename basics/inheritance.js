class User {
    constructor(username) {
        this.username = username;

    }
    logMe() {
        console.log(`Name is ${this.username}`);
    }
}
class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
    addcourse() {
        console.log(`name is ${this.username}`);
    }
}
// const chai = new Teacher("nitin", "nitin@gmail.com");
// chai.addcourse();
const code = new User("nitin");
console.log(code);
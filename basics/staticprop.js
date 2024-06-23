class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`My Name is ${this.username}`);
    }
    // static 
    createId() {
        return "123";
    }
}
// const hitesh = new User("nitin");
// hitesh.logMe();
// console.log(hitesh.createId()); static is not accessed by object 

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        super(createId());
        this.email = email;
        this.password = password;
    }
}
const obj = new Teacher("nitin", "nitin@gmail.com", "niri");
console.log(obj);
// console.log(obj.createId());
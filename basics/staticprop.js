class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`My Name is ${this.username}`);
    }
    createId() {
        return "123";
    }
}
const hitesh = new User("nitin");
hitesh.logMe();
console.log(hitesh.createId());
// const user={
//     username:"nitin",
//     logincount:8,
//     signedIn:true,
//     getuserdetail:function(){
//            console.log("user details");
//            console.log(`username: ${this.username}`);
//            console.log(this);
//     }
// }
// console.log(user.username);
// console.log(getuserdetail());
// console.log(this);
function User(username,logincount,isloggedIn){
    this.username=username;
    this.logincount=logincount;
    this.isloggedIn=isloggedIn;
    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }
    return this;
}
const useroutput=User("Nitin",8,true);
console.log(useroutput);
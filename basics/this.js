// const obj={
//     name:"nitin",
//     Rollno:80,
//     welcomemessage:function(){
//         console.log(`hii ${this.name} welcome to my page  `);
//         console.log(this);
//     }

// }
// obj.welcomemessage();
// obj.name="aditya"
// obj.welcomemessage();
// console.log(this);
// function chai(){
//     console.log(this);
// }
// chai();
// function chaii(){
//     name:"nitin";
//     console.log(this.name);
// }
// chaii();
// const chaii=function(){
//     console.log("nitin");
// }
// chaii();
// const chaii=()=>{
//     console.log("nitin");
// }
// chaii();
// const obj=(num1,num2)=>{
//     return (num1+num2);
// }
// console.log(obj(6,5));
// const obj=(num1,num2)=> (num1+num2); //implicite return
// console.log(obj(6,5));
const message=(n,m)=>({name:"nitin"})
console.log(message(1,2));

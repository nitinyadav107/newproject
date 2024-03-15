// const user=new Object(); //singleton object
// const user1={};  //non singleton object
// console.log(user);
// console.log(user1);
// user1.id="123abc";
// user1.name="nitin";
// user1.rollno=123;
// console.log(user1);
// const obj={
//     name:"nitin",
//     fullname:{
//         userfullname:{
//             middle_name:"kumar",
//             last_name:"Yadav"

//         }
//     }
// }
// console.log(obj);
// console.log(obj.name);
// console.log(obj.fullname);
// console.log(obj.fullname.userfullname);
// console.log(obj.fullname.userfullname.lastname);
// const obj1={1:"a",2:"b"};
// const obj2={3:"a",4:"b"};
// const obj3={obj1 , obj2}
// const obj3=Object.assign({},obj1,obj2) //if we not write{} then all the object values are stored in obj1
// const obj3={...obj1,...obj2}
// console.log(obj3);
// const arr=[
//     {
//         name:"nitin",
//         rollno:80
//     },
//     {
//         name:"Aditya",
//         rollno:40
//     },
//     {
//         name:"Aditi",
//         rollno:20
//     }
// ]
// console.log(arr[1].name);
// console.log(arr);
// console.log(Object.keys(arr));
// console.log(Object.values(arr));
// console.log(Object.entries(arr));
// console.log(Object.hasOwnProperty("namee"));
const course={
    name:"nitin",
    rollno:80
}
// console.log(course.name);
// const {name}=course;
// console.log(name);
const {name:n}=course;
console.log(n);


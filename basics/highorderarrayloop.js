// let arr=[1,2,3,4]
// for (const num of arr) {
//     console.log(num);
    
// }
//map
// const map=new Map();
// map.set("In","India");
// console.log(map);
// const map=new Map();
// map.set("In","India");
// for (const [key,value] of map) {
//     console.log(key+" ======= "+value);
    
// }

// const obj={
//     name:"nitin",
//     rollno:40
// }
// for (const [key,value] of obj) {
//     console.log(key+"ff"+value);
    
// }
// for (const key in obj) {
//     console.log(key+" === "+obj[key]);
    
// }
// arr=[21,34,22,44];
// for (const key in arr) {
//   console.log(key);
// }
const coding=["js","rb","python","java"];
// coding.forEach(function (val){
//     console.log(val);
// })
// coding.forEach((val)=>{
//     console.log(val);
// })
// function printMe(val){
//     console.log(val);
// }
// coding.forEach(printMe);
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })
const arr=[
    {
        name:"nitin",
        rollno:12
    },
    {
        name:"ajay",
        rollno:11
    },
    {
        name:"somu",
        rollno:10
    },
]
arr.forEach((item)=>{
    console.log(item.name);
})
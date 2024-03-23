//for each loop doesnot return anything 
// const arr=[1,2,3,4];
// const a=arr.forEach((val)=>{
//     return val;
// })
// console.log(a);
// const b=arr.filter((num)=>num > 2) //if we use like this we dont need to use return statement but if we use curly bracket we use to return 
// console.log(b);
// const b=arr.filter((num)=>{
//     return num > 2
// })
// console.log(b);
// const c=[];
// arr.forEach((e)=>{
//     if(e>2){
//         c.push(e);
//     }
// })
// // console.log(c);
// const arr=[
//     {
//         name:"nitin",
//         rollno:12
//     },
//     {
//         name:"ajay",
//         rollno:11
//     },
//     {
//         name:"somu",
//         rollno:10
//     },
// ]
// const d=arr.filter((r)=>r.rollno==10);
// console.log(d);
// const ar=[1,2,1,4,5,6]
// const a=ar.map((val)=>(val+10));
// console.log(a);
// const n1=ar
//           .map((num)=>num+12)
//           .map((n)=>n*3)
//           .filter((num)=>num>40)

// console.log(n1);
// const a=ar.reduce(function (acc,val){
//     console.log(acc+"+"+val)
//     return acc+val

// }, 1);
// console.log(a);
const shop=[
    {
        item:"gucci",
        price:12341
    },
    {
        item:"gucci",
        price:121
    },
    {
        item:"gucci",
        price:1231
    },
    {
        item:"gucci",
        price:1231
    },
]
const shopcost=shop.reduce((acc,val)=>acc+val.price,0)
console.log(shopcost);
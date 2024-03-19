//== check value & === check value as well as type
// const temp=20;
// if(temp>50){
//     console.log("summer");
// }else{
//     console.log("winter")
// }
// let month=3;
// switch(month){
//     case 1:
//         console.log("january");
//         break;     //if we not apply break it will execute all cases except default
//     case 2:
//         console.log("february");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     default:
//         console.log("default");
//         break;

// }
// const email="nitinyadav4880@gmail.com";
// if(email){
//     console.log("email exist");
// }
// else{
//     console.log("not exist");
// }

// falsy value
// 0,-0,null,undefined,NaN(not a number),BigInt,0n,"",false
//truthy values
//"0",'false'," ",[],{},function(){}
// const obj={};
// if(Object.keys(obj.length===0)){
//     console.log("empty obj");
// }


//Nullish Coalesing operator(??)


// let val1;
// val1=5??10;
// console.log(val1);
// val1=null??10;
// console.log(val1);
// val1=undefined??10;
// console.log(val1);

// val1=null??10??13;
//  console.log(val1);

//terniary operator

const icetea=12;
icetea>=45?console.log("icetea is greater than 45"):console.log("icetea is less than 45");
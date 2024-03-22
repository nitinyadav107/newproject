let arr=[1,2,3,4]
for (const num of arr) {
    console.log(num);
    
}
//map
// const map=new Map();
// map.set("In","India");
// console.log(map);
const map=new Map();
map.set("In","India");
for (const [key,value] of map) {
    console.log(key+" ======= "+value);
    
}

